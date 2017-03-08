import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { FavouritesPage } from '../pages/favourites/favourites';
import { LibraryPage } from '../pages/library/library';
import { SectionPage } from '../pages/section/section';
import { QuotePage } from '../pages/quote/quote';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavouritesPage,
    LibraryPage,
    SectionPage,
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
    SectionPage,
    QuotePage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
