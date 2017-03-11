import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { FavouritesService } from '../../services/favourites.service';
import { SettingsService } from '../../services/settings.service';

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
      private modalCtrl: ModalController,
      private settingsService: SettingsService
    ) {}

  ionViewWillEnter() {
    this.favouriteQuotes = this.favouritesService.getFavourites();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);

    modal.present();

    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.removeFromFavourites(quote);
      }
    });
  }

  removeFromFavourites(quote: Quote) {
    this.favouritesService.removeFromFavourites(quote);
    this.favouriteQuotes = this.favouritesService.getFavourites();
  }

  isAltBackground() {
    return this.settingsService.getToggleStatus();
  }
}
