import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the GifsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GifsProvider {

  api_key = 'dc6zaTOxFJmzC';

  constructor(public http: HttpClient) {
    console.log('Hello GifsProvider Provider');
  }

  getGifs() :Observable<any> {
    return this.http.get<any>('http://api.giphy.com/v1/gifs/trending?api_key='+this.api_key)
      .map(result => {
        return result.data;
      });
  }

  searchGifs(searchText) :Observable<any> {
    return this.http.get<any>('http://api.giphy.com/v1/gifs/search?q='+searchText+'&api_key='+this.api_key)
      .map(result => {
        return result.data;
      });
  }

}
