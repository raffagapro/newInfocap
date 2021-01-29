import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

// import {google} from 'google-maps';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.showMap();
  }
  showMap(){
    const location = new google.maps.LatLng(-17.824858, 31.053028);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true,
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }
  searchPro(){
    this.router.navigate(['/user/profesional-list']);
  }
}
