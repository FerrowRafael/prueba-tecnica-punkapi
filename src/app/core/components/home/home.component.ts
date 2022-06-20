import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Beer } from "../../models/Beer.model"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public beers: Array<Beer> = [];
  public search: any;

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    if (!this.search) this.getBeers();
  }

  public getBeers() {
    this.apiService.getBeers().subscribe(data => {
      this.beers = data;
    });
  }

  public showSearchEvent(event: any) {
    this.beers = [];
    this.search = event.showSearch;
    this.apiService.searchBeers(this.search)
      .pipe(
        debounceTime(300),
        distinctUntilChanged())
      .subscribe(data => {
        this.beers = data;
      });
  }

}
