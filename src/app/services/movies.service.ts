import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theatres } from '../interfaces/theatres';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  getTheatres(): Observable<Theatres> {
    return this.http.get<Theatres>('https://api.themoviedb.org/3/movie/now_playing?api_key=5da83062ccaf4ffaa4c4dac1072112cd&language=en-US&page=1');
  }

}
