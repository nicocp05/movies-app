import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/theatres';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.css']
})
export class MoviesGridComponent implements OnInit {

  @Input() movies: Movie;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  movieClick( movie: Movie ) {
    
    this.router.navigate(['/movie', movie.id])
  }

}
