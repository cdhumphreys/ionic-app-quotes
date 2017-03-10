import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: {
    category: string,
    quotes: Quote[],
    icon: string
  };

  constructor(private navParams: NavParams, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavourites() {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are you sure you want to add this quote to your favourites?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('added');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancelled');
          }
        }
      ]
    });
    alert.present();
  }

}
