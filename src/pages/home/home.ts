import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  pets: any;
  toys: any;

  constructor(public navCtril: NavController) {

      this.pets = [
          "bat",
          "ghost",
          "miko"
      ];

      this.toys = [
        "string",
        "bone",
        "baseball"
    ];

  }

  petRand: number;
  toyRand: number;

  ionViewDidEnter() {
    this.petRand=this.random();
    this.toyRand=this.random();
  }

  random(): number {
    let rand = Math.floor(Math.random()*3);
    return rand;       
  }

}
