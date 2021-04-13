import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'ng-starrating';




@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ]
})
export class PagesModule { }
