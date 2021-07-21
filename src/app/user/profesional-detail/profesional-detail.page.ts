import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController, MenuController } from "@ionic/angular";
import { Subscription } from "rxjs";

import { User } from "src/app/model/user.model";
import { ProfCategory } from "src/app/model/profCategory.model";
import { SolicitudService } from "src/app/services/solicitud.service";
import { UserService } from "src/app/services/user.service";
import { API } from "src/environments/environment";
import { ImgListService } from "src/app/services/img-list.service";
import { IMAGE_URL_BLANK } from "src/shared/constants";
import * as moment from "moment";
import axios from "axios";
import { EvaluationData } from "src/shared/types/EvaluationData";

@Component({
	selector: "app-profesional-detail",
	templateUrl: "./profesional-detail.page.html",
	styleUrls: ["./profesional-detail.page.scss"],
})
export class ProfesionalDetailPage implements OnInit, OnDestroy {
	selectedProCat: ProfCategory = new ProfCategory(
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	);
	selectedProfPhoto: string;
	grabbedUser: User;
	userSub: Subscription;
	loadedImgList: string[] = [];
	filterCategories = [];
	imgListSub: Subscription;
	headers: HttpHeaders;
	editedHours: string;
	editedDays: string = "";
	slideOptions = {
		initialSlide: 0,
		slidesPerView: 2,
		autoplay: true,
	};
	evaluationsData: EvaluationData = {
		worknumber: 0,
		stars_everage: 0,
		technical_capacity_everage: 0,
		puntuality_everage: 0,
		cordiality_everage: 0,
		service_and_satisfaction_everage: 0,
	};

	constructor(
		private router: Router,
		private menuController: MenuController,
		private solServ: SolicitudService,
		private http: HttpClient,
		private us: UserService,
		private lc: LoadingController,
		private ils: ImgListService
	) {}

	async ngOnInit() {
		this.us.getUser();
		this.userSub = this.us.loggedUser.subscribe((user) => {
			if (user) {
				this.grabbedUser = user;
				this.headers = new HttpHeaders().set(
					"Authorization",
					"Bearer " + this.grabbedUser.access_token
				);
				this.getProf();
				this.getEvaluations();
			}
		});
		//loading imgList
		this.loadedImgList = this.ils.imgList;
		this.imgListSub = this.ils.listChanged.subscribe((imgList) => {
			this.loadedImgList = imgList;
		});
	}

	ionViewWillEnter() {
		this.menuController.enable(true, "user");
		this.selectedProfPhoto = this.solServ.solicitud.proPhoto;

		if (this.selectedProfPhoto === IMAGE_URL_BLANK) {
			this.selectedProfPhoto = null;
		}
	}

	async getProf() {
		const loader = await this.lc.create({
			message: "Cargando información del profesional...",
		});
		await loader.present();

		try {
			let response = await axios.get(
				`${API}/client/profession/${this.solServ.solicitud.proPerfil_id}`,
				{
					headers: {
						Authorization: `Bearer ${this.grabbedUser.access_token}`,
					},
				}
			);
			this.selectedProCat = response.data.data;
			this.editedHours = this.selectedProCat.hours;
			this.editedDays = this.selectedProCat.work_days;
			this.ils.setImgList(response.data.data.images);
			await loader.dismiss();
		} catch (error) {
      alert(error.message)
      await loader.dismiss()
    }
	}

	async getEvaluations() {
		try {
			let response = await axios.get(
				`${API}/supplier/evaluation/${this.solServ.solicitud.proPerfil_id}`,
				{
					headers: {
						Authorization: `Bearer ${this.grabbedUser.access_token}`,
					},
				}
			);
			if (response.data && response.data.code !== 200) {
				//TODO: Maybe show an error message
				return;
			}
			this.evaluationsData = response.data.data;
		} catch (error) {
			console.log(error);
		}
	}

	openMenu() {
		this.menuController.open();
	}

	sendRequest() {
		this.solServ.setProPerfilObj(this.selectedProCat);
		this.router.navigate(["/user/solicitud-servicio"]);
	}

	ngOnDestroy() {
		this.userSub.unsubscribe();
		this.imgListSub.unsubscribe();
	}
}
