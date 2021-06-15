import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController, MenuController } from "@ionic/angular";
import moment from "moment";
import { Subscription } from "rxjs";
import { User } from "src/app/model/user.model";
import { SolicitudService } from "src/app/services/solicitud.service";
import { UserService } from "src/app/services/user.service";
import { API } from "src/environments/environment";

@Component({
	selector: "app-prof-contactados-list",
	templateUrl: "./prof-contactados-list.page.html",
	styleUrls: ["./prof-contactados-list.page.scss"],
})
export class ProfContactadosListPage implements OnInit {
	grabbedUser: User;
	userSub: Subscription;
	headers: HttpHeaders;
	loadedServices;
	sortedServices = [];

	constructor(
		private router: Router,
		private menuController: MenuController,
		private http: HttpClient,
		private us: UserService,
		private lc: LoadingController,
		private solServ: SolicitudService
	) {}

	ngOnInit() {
		this.userSub = this.us.loggedUser.subscribe((user) => {
			this.grabbedUser = user;
		});
	}

	ionViewWillEnter() {
		this.headers = new HttpHeaders().set(
			"Authorization",
			"Bearer " + this.grabbedUser.access_token
		);
		this.menuController.enable(true, "user");
		this.sortedServices = [];
		this.loadServices();
	}

	loadServices() {
		this.lc
			.create({
				message: "Cargando lista de servicios...",
			})
			.then((loadingEl) => {
				loadingEl.present();
				this.http
					.get(API + "/client/requestservices", { headers: this.headers })
					.subscribe(
						(resData) => {
							loadingEl.dismiss();
							this.loadedServices = resData["data"];
							let prof = [];
							this.loadedServices = this.loadedServices.sort(
								this.sortByCreatedDate
							);
							this.loadedServices.forEach((i) => {
								let go = true;
								prof.forEach((p) => {
									if (p === i.supplier_id) {
										go = false;
									}
								});
								if (go) {
									prof.push(i.supplier_id);
									this.sortedServices.push(i);
								}
							});
						},
						(err) => {
							console.log(err);
							loadingEl.dismiss();
						}
					);
			});
	}

	p(passingDate: string) {
		return moment.utc(passingDate, 'DD/MM/YYYY hh:mm:ss').startOf('minute').fromNow();
	}

	openMenu() {
		this.menuController.open();
	}

	solicitudes(profId: string) {
		this.solServ.setProfId(profId);
		this.router.navigate(["/user/single-prof-services"]);
	}

	sortByCreatedDate(a, b) {
		let firstDate = moment
			.utc(a.created_date, "DD/MM/YYYY HH:mm:ss")
			.tz(moment.tz.guess());
		let secondDate = moment
			.utc(b.created_date, "DD/MM/YYYY HH:mm:ss")
			.tz(moment.tz.guess());
		if (firstDate > secondDate) {
			return -1;
		}
		if (firstDate < secondDate) {
			return 1;
		}
		return 0;
	}
}
