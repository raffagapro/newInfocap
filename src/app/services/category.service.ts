import { Injectable } from '@angular/core';

import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _category: Category;

  constructor() { }

  get category(){
    return this._category;
  }

  setCategory( newCat: Category){
    this._category = newCat;
  }
}
