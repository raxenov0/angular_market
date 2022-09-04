import {Injectable} from '@angular/core';
import {IProduct} from "../models/products.model";

@Injectable({
  providedIn: 'root'
})
export class ModalService{

  constructor() { }
  modal:boolean = false


}
