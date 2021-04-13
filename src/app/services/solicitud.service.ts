import { Injectable } from '@angular/core';
import { ProfCategory } from '../model/profCategory.model';
import { ProSolicitud } from '../model/proSolicitud.model';
import { Solicitud } from '../model/solicitud.model';
import { SolicitudObject } from '../model/solicitudObject.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private _solicitud: Solicitud = new Solicitud(
    null, null, null, null, null, null, null, null, null, null, null, null, null
    );

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

  setServiceObj(serObj: SolicitudObject){
    this._solicitud.solicitudOBJ = serObj;
  }

  setProServiceObj(serObj: ProSolicitud){
    this._solicitud.solicitudProOBJ = serObj;
  }

  setProfId(profID: string){
    this._solicitud.profId  = profID;
  }

  setNewDate(newDate: string){
    this._solicitud.newDate  = newDate;
  }

  setNewTime(newtime: string){
    this._solicitud.newTime  = newtime;
  }

  setInstructions(instructions: string) {
    this._solicitud.instructions = instructions;
  }
  
  clearSolicitud(){
    this._solicitud = new Solicitud(
      null, null, null, null, null, null, null, null, null, null, null, null, null
      );
  }
}
