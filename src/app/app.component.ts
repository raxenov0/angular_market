import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./services/products.service";
import {IProduct} from "./models/products.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ProductService:ProductsService) {}
  title = 'shop';
  basket:IProduct[] = []
}
