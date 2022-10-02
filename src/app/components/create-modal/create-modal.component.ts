import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {IProduct} from "../../models/products.model";

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<boolean>();


  formLoad:FormGroup
  newPath:string = ""
  path = './../../../assets/img/clothes.png'
  imgLoad:boolean = false;
  statusText:string = '';


  // id:number,
  // title:string,
  // price:number,
  // description:string,
  // category:string,
  // image:string,
  // rating: {
  //   rate:number,
  //   count:number
  // }
   async onSubmitLoad() {
    console.log(this.formLoad)
     const item:IProduct = {
      id:0,
       title:this.formLoad.value.title,
       price:this.formLoad.value.price,
       description:this.formLoad.value.description,
       category:this.formLoad.value.category,
       image:this.formLoad.value.url,
       rating: {
         rate:0,
         count:this.formLoad.value.count,
       }
     }

     await fetch('https://fakestoreapi.com/products',{
       method:"POST",
       body:JSON.stringify(item)
     })
       .then(res=>res.json())
       .then(json=> this.productService.addItem({...item, id:json.id}))

     //
     // this.productService.addItem(item)

     for (let name in this.formLoad.controls) {
       this.formLoad.controls[name].setErrors(null);
       this.formLoad.controls[name].setValue('');
     }
  }

  change(change: boolean): void {
    this.buttonClick.emit(change);
  }

  async loadImg(){
    try{
      const response:any = await fetch(this.newPath)
        console.log(response)
      if(response.ok) {
        this.path = this.newPath;
        this.imgLoad = true;
      }
      else {
        this.statusText = response.statusText
        this.newPath=""
        this.imgLoad = false;
      }
    } catch (error) {
      console.log(error)
    }

  }



  constructor(public productService:ProductsService) { }

  ngOnInit(): void {
    this.formLoad = new FormGroup({
      'url': new FormControl( null, [Validators.required, Validators.minLength(10)]),
      'title' : new FormControl( null, [Validators.required, Validators.minLength(6)]),
      'category' : new FormControl( null, [Validators.required, Validators.minLength(3)]),
      'price' : new FormControl( null, [Validators.required, Validators.minLength(1)]),
      'count' : new FormControl( null, [Validators.required, Validators.minLength(1)]),
      'description' : new FormControl( null, [Validators.required, Validators.minLength(6)])
    })
  }

}
