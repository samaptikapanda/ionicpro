import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(
    private router:Router,
    private angularfireauth:AngularFireAuth

  ) { }
 
  email:any=""
  password:any=""

  ngOnInit() {
  }
  signup(){
     this.angularfireauth.createUserWithEmailAndPassword(this.email,this.password);
     alert("data successfully submit");
    this.router.navigate(['dashboard']);
}

  
}
