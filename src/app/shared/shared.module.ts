import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BeerComponent } from './components/beer/beer.component';
import { SearcherComponent } from './components/searcher/searcher.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BeerComponent,
    SearcherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BeerComponent,
    SearcherComponent
  ]
})
export class SharedModule { }
