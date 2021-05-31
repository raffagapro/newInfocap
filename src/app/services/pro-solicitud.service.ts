import { Injectable } from '@angular/core';
import { ProSolicitud } from '../model/proSolicitud.model';

@Injectable({
  providedIn: 'root'
})
export class ProSolicitudService {

  private _solicitud: ProSolicitud = new ProSolicitud(
    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'NORMAL'
    );

  constructor() { }

  get solicitud(){
    return this._solicitud;
  }

  
  setID(id:string) {
    this._solicitud.id = id
  }

  setClientLastName(lastName:string){
    this._solicitud.clientLastName = lastName;
  }

  setClientName(name:string){
    this._solicitud.clientName = name;
  }

  setClientImg(url:string){
    this._solicitud.clientImg = url;
  }

  setImages(url:[]){
    this._solicitud.images = url;
  }

  setCategoryID(id:string) {
    this._solicitud.category_id = id
  }

  setCategoryName(name:string) {
    this._solicitud.categoryName = name
  }

  setDateRequired(date:string) {
    this._solicitud.date_required = date
  }

  setHours(hours:string) {
    this._solicitud.hours = hours
  }

  setDescription(description:string) {
    this._solicitud.description = description
  }

  setStatusID(id:number) {
    this._solicitud.status_id = id
  }

  setCosto(cost:number) {
    this._solicitud.cost = cost
  }

  setSuplierLastName(name:string) {
    this._solicitud.supplierLastName = name
  }
  
  setSuplierName(name:string) {
    this._solicitud.supplierName = name
  }

  setTicketNumber(ticket:string) {
    this._solicitud.ticket_number = ticket
  }

  setClientPhone(number:string) {
    this._solicitud.clientPhone = number
  }

  setSolicitudType(type:string) {
    this._solicitud.type = type
  }


  clearSolcitud() {
    this._solicitud = new ProSolicitud(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'NORMAL');
  }


}
