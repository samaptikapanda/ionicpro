import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registation',
  templateUrl: './registation.page.html',
  styleUrls: ['./registation.page.scss'],
})
export class RegistationPage implements OnInit {

  constructor(
    private Router:Router,
    private angularfireauth:AngularFireAuth
  ) { }
  name:any=""
  email:any=""
  password:any=""


  ngOnInit() {
  }
  signup(){
    this.angularfireauth.createUserWithEmailAndPassword(this.email,this.password);
this.Router.navigate(['login'])
  }
}
