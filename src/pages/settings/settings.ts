import { Component } from '@angular/core';
import { NavController, NavParams, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private settingsService: SettingsService) {}

  onToggle(toggleEvent: Toggle) {
    this.settingsService.changeToggle(toggleEvent.checked);
  }

  checkToggled() {
    return this.settingsService.getToggleStatus();
  }

}
