import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { FavouritesPage } from '../pages/favourites/favourites';
import { LibraryPage } from '../pages/library/library';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotePage } from '../pages/quote/quote';
import { SettingsPage } from '../pages/settings/settings';

import { FavouritesService } from '../services/favourites.service';
import { SettingsService } from '../services/settings.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavouritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FavouritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavouritesService,
    SettingsService
  ]
})
export class AppModule {}
