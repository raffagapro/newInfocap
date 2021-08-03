import { Injectable } from '@angular/core';
import { VisitaTecnica } from '../model/visitaTecnica.model';

@Injectable({
  providedIn: 'root'
})
export class VisitaTecnicaService {
  private _visitaTecnica: VisitaTecnica = new VisitaTecnica(null, null, null)

  constructor() { }

  get visitaTecnica(){
    return this._visitaTecnica;
  }

  setDate(date:string){
    this._visitaTecnica.date_required = date;
  }

  setHours(hours:string) {
    this._visitaTecnica.hours = hours;
  }

  setHoursFinal(hours:string) {
    this._visitaTecnica.hours_final = hours;
  }

  clearSolicitud(){
    this._visitaTecnica = new VisitaTecnica(
      null, null, null
      );
  }

}
