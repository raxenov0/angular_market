import { Injectable } from '@angular/core';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile,sendEmailVerification, updateEmail} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firebaseConfig = {
    apiKey: 'AIzaSyA4S0JNdaCMBYcfuGu1RWmze_MAG9fBUTg',
    authDomain: 'chat-app-39869.firebaseapp.com',
    projectId: 'chat-app-39869',
    storageBucket: 'chat-app-39869.appspot.com',
    messagingSenderId:'221408528924',
    appId: '1:221408528924:web:9e7f14407d1f21a42aadd9',
    measurementId:'G-1EZ6G2S70Y',
    databaseURL:'https://chat-app-39869-default-rtdb.europe-west1.firebasedatabase.app'
  };
  app = initializeApp(this.firebaseConfig);
  auth = getAuth()
  errorSignIn:string
  errorRegist:string
  auntification:boolean = false
  displayName:string | null

  public async register(email:string, password:string, userName:string){
    try {
      const {user} = await createUserWithEmailAndPassword(this.auth, email, password)
      if (this.auth.currentUser) {
        await updateProfile(this.auth.currentUser, {
          displayName: userName
        })
        this.displayName = userName
        this.auntification = true
        localStorage.setItem('login', email)
        localStorage.setItem('password', password)
        return true
      }
      return false
    }
    catch {
      this.errorRegist = "Email уже используется"
      return false
    }

  }

  public async signIn(email:string, password:string){
    try{
      const {user} = await signInWithEmailAndPassword(this.auth, email, password)
      this.displayName = user.displayName
      this.auntification = true
      localStorage.setItem('login', email)
      localStorage.setItem('password', password)
      return true
    }
    catch(error){
      this.errorSignIn = "Неправильный логин или пароль"
      return false
    }
  }

  public async logOut(){
    try{
      await signOut(this.auth)
      console.log('signOut');
      this.auntification = false;
      localStorage.removeItem('login')
      localStorage.removeItem('password')
      return false
    }
    catch(error){
      console.log(error)
      return true
    }
  }


  constructor() {}
}
