import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';



@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, MoviesGridComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    MoviesGridComponent
  ]
})
export class ComponentsModule { }
