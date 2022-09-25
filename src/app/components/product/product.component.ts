import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../models/products.model";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService:ProductsService, public modal:ModalService) { }
  @Input() product:IProduct
  @Input() modification:boolean


  openFullInfo(){
    this.modal.modal = true;
    this.productService.item = this.product
  }
  ngOnInit(): void {}


}
