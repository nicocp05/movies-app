import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie: MovieDetails;
  public cast: Cast[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([

      this.movieService.getMovieDetail(id),
      this.movieService.getCast(id)

    ]).subscribe(([movie, cast]) => {
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = movie;

      this.cast = cast.filter(actor => actor.profile_path !== null);
    });

    // this.movieService.getMovieDetail(id)
    //   .subscribe(res => {
    //     if (!res) {
    //       this.router.navigateByUrl('/home');
    //       return;
    //     }
    //     this.movie = res;
    //   });

    // this.movieService.getCast(id)
    //   .subscribe(res => {
    //     this.cast = res.filter(actor => actor.profile_path !== null);
    //   });

  }

  onBack() {
    this.location.back();
  }

}
