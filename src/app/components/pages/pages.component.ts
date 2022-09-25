import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {IProduct} from "../../models/products.model";




@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public productsService:ProductsService, public modal: ModalService) { }

  name:string = ''
  loading:boolean = false
  modalWindow:boolean = false;

  sorts = [
    {name:'Дешевле', value:'price', option: '1'},
    {name:'Дороже', value:'price', option:'-1'},
    {name:'По алфавиту', value:'title', option: '1'},
    // {name:'По рейтингу', value:'rating', option: 'rating'}
  ]

  typeSort:{name:string,value:string, option:string} =   {name:'По алфавиту', value:'title', option: 'title'}

  setModalWindow(value:boolean){
    this.modalWindow = value;
  }

  createTypeSort(value:any){
    this.sorts.forEach(e=>{
      if(e.name == value.target.value) {
        this.typeSort = e;
        return
      }
    })


    if(this.typeSort.option == '1' && this.typeSort.value == 'price') // @ts-ignore
      this.productsService.products.sort((a,b)=>{return a.price-b.price})
    else if(this.typeSort.option == '-1' && this.typeSort.value == 'price')
      this.productsService.products.sort((a,b)=>{return b.price-a.price})

    else{
      // @ts-ignore
      this.productsService.products.sort((a,b)=>String(a[this.typeSort.value]).localeCompare(String(b[this.typeSort.value])))
    }
  }

  addProduct(data:IProduct){
    this.productsService.products.push(data)
  }


  view(sort:any){
    console.log(sort.target.value)
  }
  ngOnInit(): void {
    this.productsService.basketModification = false;

    if(this.productsService.products.length == 0) {
      this.loading = true;

      this.productsService.getProducts().subscribe(()=>{
        this.loading = false
      })
    }
    }

    // console.log(this.productsService.products.sort((a,b)=>String(a['price']).localeCompare(String(b['price']))))


}
