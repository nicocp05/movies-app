import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';



@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, MoviesGridComponent, CastSlideshowComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    MoviesGridComponent,
    CastSlideshowComponent
  ]
})
export class ComponentsModule { }
