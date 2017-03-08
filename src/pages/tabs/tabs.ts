import { Component } from '@angular/core';
import { FavouritesPage } from '../favourites/favourites';
import { LibraryPage } from '../library/library';

@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs>
    <ion-tab [root]="favourites" tabTitle="Favourites" tabIcon="star"></ion-tab>
    <ion-tab [root]="library" tabTitle="Library" tabIcon="book"></ion-tab>
  </ion-tabs>
  `
})

export class TabsPage {
  favourites = FavouritesPage;
  library = LibraryPage;
}
