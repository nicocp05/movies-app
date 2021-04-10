import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/theatres';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movies: Movie[] = [];
  public text: String = '';

  constructor( private activatedRoute: ActivatedRoute,
               private moviesService: MoviesService 
             ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

      this.text = params.id;
      
      this.moviesService.searchMovie(params.id)
        .subscribe( res => {
          this.movies = res;
        });
      
    });

  }

}
