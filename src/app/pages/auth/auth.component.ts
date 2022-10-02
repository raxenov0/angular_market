import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private  authService:AuthService) { }
  signIn : boolean = true
  form1:FormGroup
  form2:FormGroup


  errorSignIn:string=''
  errorRegist:string=''

  getErrorSignIn(){
    return this.errorSignIn
  }
  setErrorSignIn(stroke:string){
    this.errorSignIn = stroke
  }
  getErrorReg(){
    return this.errorRegist
  }

 async onSubmit1() {
   console.log(this.form1)
   await this.authService.onSubmitAuth(this.form1.value.email1, this.form1.value.password1)
   for (let name in this.form1.controls) {
     this.form1.controls[name].setErrors(null);
     this.form1.controls[name].setValue('');
   }
   this.setErrorSignIn(this.authService.firebase.errorSignIn)
 }
  async onSubmit2(){
    console.log(this.form2)
    await this.authService.onSubmitRegistration(this.form2.value.email2, this.form2.value.password2, this.form2.value.username2)
    this.errorRegist = this.authService.firebase.errorRegist
    for (let name in this.form2.controls) {
      this.form2.controls[name].setErrors(null);
      this.form2.controls[name].setValue('');
    }
  }


  ngOnInit(): void {

    this.form1 = new FormGroup({
      'email1': new FormControl(localStorage.getItem('login') as string | null, [Validators.required, Validators.email]),
      'password1' : new FormControl(localStorage.getItem('password') as string | null, [Validators.required, Validators.minLength(6)])
    })

    this.form2 = new FormGroup({
      'username2' : new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'email2': new FormControl(null, [Validators.required, Validators.email]),
      'password2' : new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

}
