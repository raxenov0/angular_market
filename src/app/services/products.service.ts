import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap} from "rxjs";
import {IProduct} from "../models/products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  constructor(private  http: HttpClient) { }
  products:IProduct[] = []
  basket:IProduct[] = []
  item:IProduct = this.products[0]
  basketModification:boolean = false

  view(){
    console.log(this.products)
  }
  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
      .pipe(delay(200),retry(2), tap(products=>this.products = products))
  }
  getItem(item:IProduct):Observable<IProduct>{
    return this.http.get<IProduct>('https://fakestoreapi.com/products/'+item.id).pipe(tap(item=>this.item = item))
  }
  editBasket(item:IProduct){
    if(!this.basketModification) this.addBasket(item)
    else this.removeBasket(item)
  }
  addItem(item:IProduct):IProduct{
    this.products.push(item)
    return item
  }
  addBasket(item:IProduct):boolean{
    this.basket.push(item)
    console.log('add')
    return true
  }
  async removeBasket(item:IProduct){
    try {
      await fetch('https://fakestoreapi.com/products/'+item.id,{
        method:"DELETE"
      })
        .then(res=>res.json())
        .then(json=>console.log(json))

      this.basket = this.basket.filter(product=> product.id != item.id)
      return true
    } catch (error){
      console.log(error)
      return false
    }

  }

}
