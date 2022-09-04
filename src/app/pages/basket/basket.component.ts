import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {IProduct} from "../../models/products.model";
import {ModalService} from "../../services/modal.service";
import {FirebaseService} from "../../services/firebase.service";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{
  constructor(public productService:ProductsService, public modal:ModalService, public firebase:FirebaseService) { }
  sumPayment:number = this.productService.basket.reduce((sum: number, item: IProduct) => sum + item.price, 0);

  setPayment():number {
    return this.productService.basket.reduce((sum: number, item: IProduct) => sum + item.price, 0)
  }

  ngOnInit(): void {

    this.productService.basketModification = true;
  }
}
