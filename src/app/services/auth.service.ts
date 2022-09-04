import {Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "./firebase.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  auth:boolean = false


  async onSubmitAuth(email:string, password:string){
      await this.firebase.signIn(email, password)
        .then((res)=>this.auth = res)
        .then(()=>this.router.navigate(['/shop']))
  }

  async onSubmitRegistration(email:string, password:string, userName:string){
      await this.firebase.register(email, password, userName)
        .then((res)=>this.auth = res)
        .then(()=>this.router.navigate(['/shop']))

  }

  onUnSubmit(){
    console.log('log out success')
    this.firebase.logOut()
      .then((res)=>this.auth = res)
      .then(()=>this.router.navigate(['']))
  }



  constructor(public firebase:FirebaseService, private router:Router) {
    if(localStorage.getItem('login')){
    this.onSubmitAuth(localStorage.getItem('login') as string,localStorage.getItem('password') as string)
      .then()
  } }

  ngOnInit(): void {


  }
}
