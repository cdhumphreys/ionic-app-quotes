import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { FavouritesService } from '../../services/favourites.service';
import { Quote } from '../../data/quote.interface';

import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {

  favouriteQuotes: Quote[];

  constructor(
      private favouritesService: FavouritesService,
      private modalCtrl: ModalController
    ) {}

  ionViewWillEnter() {
    this.favouriteQuotes = this.favouritesService.getFavourites();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);

    modal.present();

    modal.onDidDismiss((remove: boolean) => {

    });
  }
}
