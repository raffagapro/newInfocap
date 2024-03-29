import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { Platform } from "@ionic/angular";
import { SplashScreen } from '@capacitor/splash-screen';
import { Observable, Subscription } from "rxjs";
import { Capacitor } from "@capacitor/core";

import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { User, UserRoles } from "./model/user.model";
import { API, PHONE_PREFIX } from "src/environments/environment";
import { IMAGE_URL_BLANK } from "src/shared/constants";
import { Notification } from "src/shared/types/Notification";
import axios from "axios";
import { NotificationsService } from "./services/notifications-service";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { GoogleService } from "./services/google/google.service";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	styleUrls: ["app.component.scss"],
})
export class AppComponent {
	imageBlank = IMAGE_URL_BLANK;
	whatsappPhone = `${PHONE_PREFIX}939304991`;
	firstLoad = false;
	logged: Observable<boolean>;
	user: User;
	notificationCount = 0;
	notifications: Notification[] = [];
	notificationSubscription: Subscription;

	constructor(
		private platform: Platform,
		private router: Router,
		private menuCtrl: MenuController,
		private as: AuthService,
		private us: UserService,
		private notificationService: NotificationsService,
		private screenOrientation: ScreenOrientation,
		private googleService: GoogleService
	) {
		this.logged = this.as.userIsAuthenticated;
		this.initializeApp();
		this.setUser();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.screenOrientation.lock("portrait");
			if (Capacitor.isPluginAvailable("SplashScreen")) {
				SplashScreen.hide();
			}
			// this.splashScreen.hide();

			this.menuCtrl.enable(false, UserRoles.PROFESSIONAL);
			this.menuCtrl.enable(false, UserRoles.USER);
			this.notificationSubscription =
				this.notificationService.notifications.subscribe(
					(notifications: Notification[]) => {
						this.notifications = notifications;
						this.notificationCount = notifications.filter(
							(notification: Notification) => !notification.viewed
						).length;
					}
				);
		});
	}

	ionViewWillEnter() {
		console.log("Enter");
	}

	private setUser() {
		this.logged.subscribe((v) => {
			if (v) {
				this.us.loggedUser.subscribe((user) => {
					this.user = user;
					if (!this.firstLoad && user.id !== null) {
						this.firstLoad = true;
						if (this.user.role === UserRoles.USER) {
							this.loadNotifications("client");
							this.router.navigate(["/user/home"], { replaceUrl: true });
						} else {
							this.loadNotifications("supplier");
							this.router.navigate(["/profesional/home"], { replaceUrl: true });
						}
					}
				});
			}
		});
	}

	logout() {
		this.menuCtrl.close();
		this.menuCtrl.enable(false, UserRoles.PROFESSIONAL);
		this.menuCtrl.enable(false, UserRoles.USER);
		this.as.logout();
		this.router.navigateByUrl("/", { replaceUrl: true });
		this.googleService.disconnect();
	}

	profile() {
		this.menuCtrl.close();
		this.router.navigate(["/user/profile-page"]);
	}

	profilePro() {
		this.menuCtrl.close();
		this.router.navigate(["profesional/perfil"]);
	}

	openWhatsapp() {
		window.open(`https://api.whatsapp.com/send?phone=${this.whatsappPhone}`);
	}

	async loadNotifications(type) {
		try {
			let response = await axios.get(`${API}/${type}/notification`, {
				headers: {
					Authorization: `Bearer ${this.user.access_token}`,
				},
			});
			const { data } = response;
			const { data: notificationsData } = data;
			this.notifications = notificationsData;
			this.notificationCount = notificationsData.filter(
				(notification: Notification) => !notification.viewed
			).length;
		} catch (error) {
			alert(error.message);
		}
	}
}
