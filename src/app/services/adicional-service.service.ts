import { Injectable } from '@angular/core';
import { AdicionalService } from '../model/adicionalService.model';

@Injectable({
  providedIn: 'root'
})
export class AdicionalServiceService {
  private _adicionalService: AdicionalService = new AdicionalService(null, [], null);

  constructor() { }

  get adicional()
  {
    return this._adicionalService;
  }

  setDetail(detail:string)
  {
    this._adicionalService.detail = detail
  }

  setPhoto(photo:[])
  {
    this._adicionalService.photo = photo
  }

  setCost(cost:number)
  {
    this._adicionalService.cost = cost
  }

  clearAdicional()
  {
    this._adicionalService = new AdicionalService(null, [], null);
  }
}
