import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../models/products.model";

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: IProduct[] , search: string): IProduct[] {
    if(search.length == 0) return value
    return value.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase()))
  }

}
