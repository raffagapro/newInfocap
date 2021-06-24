import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import slideOpts from "./slideoptions";

@Component({
	selector: "app-walkthrougth",
	templateUrl: "./walkthrougth.page.html",
	styleUrls: ["./walkthrougth.page.scss"],
})
export class Walkthrougth implements OnInit {
	@ViewChild('mainSlider') mainSlider: any;

	showLast = false;
	showSlider = false;
	slideOpts = {
		effect: "flip",
	};

	constructor(private router: Router) {
	}

	ngOnInit() {
		this.showSlider = true;
		console.log(this.mainSlider)
	}

	onLastSlide(event, active = false) {
		this.showLast = active;
	}

	move(slider) {
		slider.slideNext();
	}

	updateSlider() {
		this.mainSlider.update()
		console.log(this.mainSlider)
	}

	goToLogin() {
		this.router.navigate(["/login"], { replaceUrl: true });
	}
}
