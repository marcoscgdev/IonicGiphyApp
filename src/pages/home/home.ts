import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GifsProvider } from '../../providers/gifs/gifs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  images;
  searchText;

  constructor(public navCtrl: NavController, public GifsProvider: GifsProvider) {

  }

  ionViewDidLoad() {
    this.GifsProvider.getGifs().subscribe(result => {
      this.images = result;
    });
  }

  getItems() {
    this.GifsProvider.searchGifs(this.searchText).subscribe(result => {
      this.images = result;
    });
  }

}
