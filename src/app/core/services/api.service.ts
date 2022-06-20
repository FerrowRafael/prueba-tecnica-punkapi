import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../models/Beer.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://api.punkapi.com/v2/beers';

  constructor(
    private http: HttpClient,
  ) { }

  getBeers(): Observable<any> {
    return this.http.get<Beer[]>(this.baseUrl)
  }

  searchBeers(word: string): Observable<any> {
    return this.http.get<Beer[]>(this.baseUrl + '?beer_name=' + word)
  }


}
