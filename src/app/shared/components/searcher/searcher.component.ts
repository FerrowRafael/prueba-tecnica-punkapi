import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from "../../../core/services/api.service";

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  query: any;

  @Output() OnShowSearch = new EventEmitter<{showSearch: boolean}>();

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit(): void {}

  public searchResults(event: any) {
    let query = event.target.value;
    this.OnShowSearch.emit({showSearch: query})
  }

}
