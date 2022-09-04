import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logOut(){
    this.firebase.logOut()
      .then(()=>this.authService.auth = false)
      .then(()=>this.router.navigate(['']))
  }

  constructor(private firebase:FirebaseService, private authService:AuthService, private router:Router) { }
  ngOnInit(): void {
  }

}
