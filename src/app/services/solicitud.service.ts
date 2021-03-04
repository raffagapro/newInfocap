import { Injectable } from '@angular/core';
import { ProfCategory } from '../model/profCategory.model';
import { Solicitud } from '../model/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private _solicitud: Solicitud = new Solicitud(null, null, null, null, null, null, null);

  constructor() { }

  get solicitud(){
    return this._solicitud;
  }

  setCat(id:string){
    this._solicitud.category_id = id;
  }
  setComuna(id:string){
    this._solicitud.comuna_id = id;
  }
  setProPerfil(id:string){
    this._solicitud.proPerfil_id = id;
  }
  setAddress(address:string){
    this._solicitud.address = address;
  }
  setProPerfilObj(perfil: ProfCategory){
    this._solicitud.proPerfil = perfil;
  }
  setProPhoto(imgUrl: string){
    this._solicitud.proPhoto = imgUrl;
  }

  setServiceID(servId: string){
    this._solicitud.solicitudID = servId;
  }

  clearSolicitud(){
    this._solicitud = new Solicitud(null, null, null, null, null, null, null);
  }
}
