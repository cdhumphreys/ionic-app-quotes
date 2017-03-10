import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the Quote page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  person: string;
  text: string;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
