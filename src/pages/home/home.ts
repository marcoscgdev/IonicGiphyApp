import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  images;
  searchText;

  constructor(public navCtrl: NavController, public HomeProvider: HomeProvider) {

  }

  ionViewDidLoad() {
    this.HomeProvider.getGifs().subscribe(result => {
      this.images = result;
    });
  }

  getItems() {
    this.HomeProvider.searchGifs(this.searchText).subscribe(result => {
      this.images = result;
    });
  }

}
