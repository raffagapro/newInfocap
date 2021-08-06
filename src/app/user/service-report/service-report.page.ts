import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
	LoadingController,
	MenuController,
	ModalController,
	NavController,
} from "@ionic/angular";
import axios from "axios";
import { Subscription } from "rxjs";
import { User } from "src/app/model/user.model";
import { SolicitudService } from "src/app/services/solicitud.service";
import { UserService } from "src/app/services/user.service";
import { ImageModalComponent } from "src/app/shared/image-modal/image-modal.component";
import { API } from "src/environments/environment";
import { Location } from "@angular/common";
import { IMAGE_URL_BLANK } from "src/shared/constants";

@Component({
	selector: "app-service-report",
	templateUrl: "./service-report.page.html",
	styleUrls: ["./service-report.page.scss"],
})
export class ServiceReportPageComponent implements OnInit {
	userSubscription: Subscription;
	user: User;
	loadedService = {
		addittional: [],
		categoryName: null,
		cummunename: null,
		category_id: null,
		created_date: null,
		date_required: null,
		descProf: null,
		description: null,
		hours_professional: null,
		hours_requestservice: null,
		img_profile: null,
		professional_profiles_id: null,
		request_id: null,
		status_id: null,
		status_name: null,
		status_order: null,
		supplierLastName: null,
		supplierName: null,
		supplier_id: null,
		ticket_number: null,
		user_client_id: null,
		work_days: null,
		img_request: [],
		request_cost: [],
	};
	serviceId: string;
	servicesCosts;
	imagesToDisplay: string[] = [];
	slideOptions = {
		initialSlide: 0,
		slidesPerView: 2,
		autoplay: true,
	};
	selectedProfPhoto: string;
	isCash = false;
	paymentTypes = [];

	constructor(
		private modalController: ModalController,
		private menuController: MenuController,
		private loadingController: LoadingController,
		private userService: UserService,
		private solServ: SolicitudService,
		private router: Router,
		private navCtrl: NavController
	) {}

	ngOnInit() {
		this.userSubscription = this.userService.loggedUser.subscribe((user) => {
			this.user = user;
			this.loadPaymentTypes();
		});
	}

	ionViewWillEnter() {
		this.menuController.enable(true, "user");
	}

	async loadService() {
		let loader = await this.loadingController.create({
			message: "Cargando solicitud...",
		});
		await loader.present();
		try {
			let response = await axios.get(
				`${API}/client/requestservice/${this.solServ.solicitud.solicitudID}`,
				{
					headers: {
						Authorization: `Bearer ${this.user.access_token}`,
					},
				}
			);
			this.selectedProfPhoto = this.solServ.solicitud.proPhoto;

			if (this.selectedProfPhoto === IMAGE_URL_BLANK) {
				this.selectedProfPhoto = null;
			}
			
			this.loadedService = response.data.data;
			await this.loadCosts();
		} catch (error) {
			console.log(error);
		} finally {
			await loader.dismiss();
		}
	}

	async loadCosts() {
		let loader = await this.loadingController.create({
			message: "Consultando información...",
		});
		loader.present();
		try {
			let response = await axios.get(
				`${API}/client/detailcostrequest/${this.solServ.solicitud.solicitudID}`,
				{
					headers: {
						Authorization: `Bearer ${this.user.access_token}`,
					},
				}
			);
      
			if (response.data) {
				let data = response.data.data;
				if (response.data.code !== 200) {
					alert("Error");
					return;
				}
				this.servicesCosts = data;
				let images = this.loadedService.img_request.concat(this.servicesCosts.img_addittional);
				this.imagesToDisplay = images.map(
					(image) => image.image
				);
				if (this.imagesToDisplay.length === 1) {
					this.slideOptions.slidesPerView = 1;
				}
			}
		} catch (error) {
			console.log(error);
		} finally {
			loader.dismiss();
		}
	}

	async loadPaymentTypes() {
		try {
			let response = await axios.get(`${API}/payments/type`, {
				headers: {
					Authorization: `Bearer ${this.user.access_token}`,
				},
			});
			this.paymentTypes = response.data.data;
		} catch (error) {
			console.log(error);
		} finally {
			this.loadService();
		}
	}

	async openImage(image: string) {
		const successModal = await this.modalController.create({
			component: ImageModalComponent,
			componentProps: {
				image,
			},
			cssClass: "modalImage",
		});
		successModal.present();
	}

	getServiceAditional() {
		if (this.servicesCosts && this.servicesCosts.addittional.length > 0) {
			return Math.floor(
				Number(
					this.servicesCosts.addittional.reduce(
						(total, entity) => (total += Number(entity.amount_client)),
						0
					)
				)
			);
		}
		return 0;
	}

	getTotal() {
		if (!this.servicesCosts) return 0;
		return Math.floor(
			Number(this.getServiceAditional()) +
				Number(parseFloat(this.servicesCosts.amount_client).toFixed(2))
		);
	}

	getServiceCost() {
		if (this.servicesCosts && this.servicesCosts.amount_client) {
			return Math.floor(Number(this.servicesCosts.amount_client));
		}
		return 0;
	}

	goBack() {
		this.navCtrl.back();
	}

	validatePaymentType() {
		if (this.loadedService.request_cost.length > 0) {
			let firstCost = this.loadedService.request_cost[0];
			let paymentType = this.paymentTypes.find(
				(paymentType) => paymentType.id === firstCost.payment_type_id
			);
			this.isCash = paymentType.name === "Efectivo";
		}
	}
}
