import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgListService {
  listChanged = new Subject<[]>();
  private _imgList: [] = [];

  constructor() { }

  get imgList(){
    return this._imgList;
  }

  setImgList(list: []){
    this._imgList = list;
    this.listChanged.next(list);
  }
}
