import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public price=0;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  presentAlert(price:string) {
    let alert = this.alertCtrl.create({
      title: 'Purchase?',
      subTitle: '{{price}}',
      buttons: ['No', 'Yes']
    });
    alert.present();
  }
}
