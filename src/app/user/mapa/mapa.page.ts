import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Capacitor, Plugins } from '@capacitor/core';
import { LoadingController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

const { Geolocation } = Plugins;
// import {google} from 'google-maps';
declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, OnDestroy {
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  map: any;
  // lat: string;
  // long: string;  
  autocomplete: { input: string; };
  autocompleteItems: any[];
  placeid: any;
  GoogleAutocomplete: any;
  comunas = [];
  headers: HttpHeaders;
  grabbedUser: User;
  userSub: Subscription;
  marker: any;
  form: FormGroup;

  constructor(
    // private geolocation: Geolocation,
    // private nativeGeocoder: NativeGeocoder,
    private lc: LoadingController,
    private router: Router,
    public zone: NgZone,
    private http: HttpClient,
    private us: UserService,
    private solServ: SolicitudService,
    private platform: Platform,
  ) { 
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
   }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    //comunas
    this.http.get(API+'/location/communes', {headers: this.headers})
    .subscribe(resData =>{
      // console.log('comunas');
      this.comunas = resData['data'];
      // console.log(this.comunas);
    });
    // form
    this.form = new FormGroup({
      address: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  ionViewDidEnter(){
    this.loadMap();
  }

  loadMap(){
    this.lc.create({
      message: 'Generando mapa...'
    }).then(async loadingEl =>{
      loadingEl.present();
      let latLng;
      if ((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
        Geolocation.getCurrentPosition().then(resData =>{
          console.log(resData);
          loadingEl.dismiss();
          latLng = new google.maps.LatLng(resData.coords.latitude, resData.coords.longitude);
        }, err =>{
          console.log(err);
          loadingEl.dismiss();
          latLng = new google.maps.LatLng(-33.5615548, -71.6251603);
        });
      }else{
        // get location from device
        const coords = await Geolocation.getCurrentPosition();
        console.log(coords);
        latLng = new google.maps.LatLng(coords.coords.latitude, coords.coords.longitude);
      }

      let mapOptions = {
        center: latLng,
        zoom: 15,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      //load map
      // this.getAddressFromCords(res.coords.latitude, res.coords.longitude);
      this.map = new google.maps.Map(this.mapRef.nativeElement, mapOptions);
      this.map.addListener('tilesloaded', () =>{
        // console.log('accuracy', this.map, this.map.center.lat());
        // this.getAddressFromCords(this.map.center.lat(), this.map.center.lng());
        // this.lat = this.map.center.lat();
        // this.long = this.map.center.lng();
      });
      //marker
      this.marker = new google.maps.Marker({
        position: latLng,
        draggable: true,
        map: this.map
      });
      this.marker.setMap(this.map);
      //click
      this.map.addListener('click', e => {
        this.addMarker(e.latLng, this.map);
      });
      loadingEl.dismiss();
    });
  }

  addMarker(location, map) {
    // Add the marker at the clicked location,
    if (this.marker) {
      this.marker.setMap(null);
    }
    this.marker = new google.maps.Marker({
      position: location,
      draggable: true,
      map: map,
    });
    this.marker.setMap(this.map);
  }

  getAddressFromCords(latitude, longitude) {}

  updateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ 
      input: this.autocomplete.input,
      types: ['address'],
      componentRestrictions: {country: 'cl'}
    },
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }

  selectSearchResult(item) {
    ///this is the place for storing data to service
    // alert(JSON.stringify(item))      
    this.placeid = item.place_id
    
    let wAddress = item.description.split(',');
    // console.log(wAddress[1].substring(1));
    // console.log(item);
    // pass address to input
    this.form = new FormGroup({
      address: new FormControl(item.description, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
    //save to solicitud service
    this.solServ.setAddress(item.description);
    //save comuna id to solicitud service
    this.comunas.forEach(comuna => {
      if (comuna.name === wAddress[1].substring(1).toLowerCase()) {
        this.solServ.setComuna(comuna.id);
      }else{
        // console.log('no match');
      }
    });
    this.clearAutocomplete();
    
    // const geocoder = new google.maps.Geocoder();
    // geocoder.geocode({placeId: item.place_id}, (res, status) =>{
    //   console.log(res);
    //   console.log(status);
    // });
    
  }

  clearAutocomplete(){
    this.autocompleteItems = [];
    this.autocomplete.input = '';
  }

  searchPro(){
    this.router.navigate(['/user/profesional-list']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
