import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { LoadingController, NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";

import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/model/user.model";
import { API } from "src/environments/environment";
import axios from "axios";
import { NotificationsService } from "src/app/services/notifications-service";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { GoogleService } from "src/app/services/google/google.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.page.html",
	styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
	@ViewChild("passwordEyeRegister", { read: ElementRef })
	passwordEye: ElementRef;
	error: any;
	grabbedUSer: User;
	passwordTypeInput = "password";

	constructor(
		private navController: NavController,
		private router: Router,
		private http: HttpClient,
		private as: AuthService,
		private us: UserService,
		private lc: LoadingController,
		private notificationService: NotificationsService,
		private fb: Facebook,
		private googleService: GoogleService
	) {}

	ngOnInit() {}

	checkFacebookLoginStatus() {
		this.fb
			.getLoginStatus()
			.then((res) => {
				console.log(res.status);
				if (res.status === "connect") {
				} else {
				}
			})
			.catch((e) => console.log(e));
	}

	async login(form: NgForm) {
		if (!form.valid) {
			return;
		}
		const email = form.value.email;
		const password = form.value.password;

		const loader = await this.lc.create({
			message: "Validando credenciales...",
		});
		loader.present();

		try {
			let body = {
				email,
				password,
			};
			const response = await axios.post(`${API}/auth/login`, body);
			const { data } = response;
			const { data: responseData, message } = data;

			if (responseData) {
				const { user, roles, access_token } = responseData;
				const { id, name, last_name, email, phone1, phone2, img_profile } =
					user;
				//save user info to store NEEDS WORK IN HERE
				let img: string;
				if (
					img_profile === null ||
					img_profile === "http://167.71.251.136/storage/"
				) {
					img = "assets/images/avatar.png";
				} else {
					img = img_profile;
				}
				this.grabbedUSer = new User(
					id,
					name,
					last_name,
					img,
					email,
					phone1,
					phone2,
					roles[0],
					access_token
				);

				this.us.setUser(this.grabbedUSer);
				this.as.login();
				form.control.reset();
				loader.dismiss();
				if (roles[0] === "usuario") {
					this.router.navigate(["/user/home"], { replaceUrl: true });
					this.loadNotifications("client");
				} else {
					this.router.navigate(["/profesional/home"], { replaceUrl: true });
					this.loadNotifications("supplier");
				}
			} else {
				const errorMessage =
					message === "Unauthorized"
						? "Credenciales inválidas"
						: "Ocurrió un error";
				this.error = errorMessage;
				form.reset();
				form.setValue({
					email: email,
					password: "",
				});
				loader.dismiss();
			}
		} catch (error) {
			console.log(error);
			let message = "Ocurrió un error";

			if (error.response) {
				message = error.response.data.message;
			}

			this.error = message;
			form.reset();
			form.setValue({
				email: email,
				password: "",
			});
			loader.dismiss();
		}
	}

	async loadNotifications(type) {
		try {
			let response = await axios.get(`${API}/${type}/notification`, {
				headers: {
					Authorization: `Bearer ${this.grabbedUSer.access_token}`,
				},
			});
			const { data } = response;
			const { data: notificationsData } = data;
			this.notificationService.setNotifications(notificationsData);
		} catch (error) {
			console.log(error);
		} finally {
		}
	}

	loginProfesional() {
		this.router.navigate(["/profesional/home"]);
	}

	async loginGoogle() {
		const loading = await this.lc.create({
			message: "Iniciando sesión...",
		});
		loading.present();
		try {
			let googleResponse = await this.googleService.login();
			let { givenName, familyName, email, userId } = googleResponse;
			const body = {
				name: givenName,
				last_name: familyName,
				email,
				password: userId,
			};
			this.doLoginWithSocialMedia(body);
		} catch (error) {
			console.log(error);
			alert("No se pudo iniciar sesión con Google");
		} finally {
			await loading.dismiss();
		}
	}

	loginApple() {
		// do something awesome
	}

	async loginFacebook() {
		try {
			const response = await this.fb.login(["public_profile", "email"]);

			if (response.status === "connected") {
				this.getUserDetail(response.authResponse.userID);
			} else {
				alert("No se puede iniciar sesión en Facebook con tu cuenta");
			}
		} catch (error) {
			console.log("Error logging into Facebook", error);
			alert("No se ha iniciado sesión con Workin");
		}
	}

	async getUserDetail(userid: any) {
		const loader = await this.lc.create({ message: "Iniciando sesión..." });
		try {
			await loader.present();
			const response = await this.fb.api(
				`/${userid}/?fields=id,email,first_name,last_name`,
				["public_profile"]
			);
			const { id, email, first_name, last_name } = response;
			const body = {
				name: first_name,
				last_name,
				email,
				password: id,
			};
			this.doLoginWithSocialMedia(body);
		} catch (error) {
			console.log("Error logging into Facebook", error);
			alert(error.message);
			await loader.dismiss();
		}
	}

	togglePasswordMode() {
		this.passwordTypeInput =
			this.passwordTypeInput === "text" ? "password" : "text";
		const nativeEl = this.passwordEye.nativeElement.querySelector("input");
		const inputSelection = nativeEl.selectionStart;
		nativeEl.focus();
		setTimeout(() => {
			nativeEl.setSelectionRange(inputSelection, inputSelection);
		}, 1);
	}

	async doLoginWithSocialMedia(body) {
		let response = await axios.post(`${API}/auth/facebook`, body, {
			headers: {
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest",
			},
		});
		const { data } = response;
		const { data: responseData, message } = data;

		if (responseData) {
			const { user, roles, access_token } = responseData;
			const { id, name, last_name, email, phone1, phone2, img_profile } = user;
			//save user info to store NEEDS WORK IN HERE
			let img: string;
			if (
				img_profile === null ||
				img_profile === "http://167.71.251.136/storage/"
			) {
				img = "assets/images/avatar.png";
			} else {
				img = img_profile;
			}
			this.grabbedUSer = new User(
				id,
				name,
				last_name,
				img,
				email,
				phone1,
				phone2,
				roles[0],
				access_token
			);

			this.us.setUser(this.grabbedUSer);
			this.as.login();
			if (roles[0] === "usuario") {
				this.router.navigate(["/user/home"], { replaceUrl: true });
				this.loadNotifications("client");
			} else {
				this.router.navigate(["/profesional/home"], { replaceUrl: true });
				this.loadNotifications("supplier");
			}
		} else {
			throw new Error("No se pudo iniciar sesión");
		}
	}
}
