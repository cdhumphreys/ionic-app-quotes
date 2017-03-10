import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { FavouritesService } from '../../services/favourites.service';

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

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private favouritesService: FavouritesService
   ) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavourites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are you sure you want to add this quote to your favourites?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.favouritesService.addToFavourites(quote);
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
