import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cast, Credits } from '../interfaces/credits';
import { MovieDetails } from '../interfaces/movie-details';
import { Movie, Theatres } from '../interfaces/theatres';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url: String = 'https://api.themoviedb.org/3';
  private moviesPage = 1;
  public loading: boolean = false;

  get params() {
    return {
      api_key : '5da83062ccaf4ffaa4c4dac1072112cd',
      language : 'en=US',
      page: this.moviesPage.toString()
    }
  }

  constructor( private http: HttpClient ) { }

  getTheatres(): Observable<Movie[]> {

    if ( this.loading ) {
      return of([]);
    }

    return this.http.get<Theatres>(`${this.url}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map ( (res) => res.results ),
      tap( () => {
        this.moviesPage += 1;
        this.loading = false;
      })
    );
  }

  searchMovie( text: String ): Observable<Movie[]> {

    const params = {...this.params, page: '1'}

    return this.http.get<Theatres>(`${this.url}/search/movie?query=${text}`, {
      params
    }).pipe(
      map ( res => res.results )
    )
  }

  resetPage() {
    this.moviesPage = 1;
  }

  getMovieDetail( id: String ) {
    return this.http.get<MovieDetails>(`${this.url}/movie/${id}`, {
      params: this.params
    }).pipe(
      catchError( err => of(null))
    );
  }

  getCast( id: String ): Observable<Cast[]> {
    return this.http.get<Credits>(`${this.url}/movie/${id}/credits`, {
      params: this.params
    }).pipe(
      map( res => res.cast ),
      catchError( err => of([]))
    )
  }

}
