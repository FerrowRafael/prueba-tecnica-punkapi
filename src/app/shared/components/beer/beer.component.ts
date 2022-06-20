import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../../core/models/Beer.model';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  @Input() beer: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
