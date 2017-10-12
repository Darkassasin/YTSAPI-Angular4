import { Component, OnInit } from '@angular/core';
import {MovieService} from './movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any = {};
  constructor(private movieService:MovieService) { }

  getMovies():void{
    this.movies=this.movieService.getMovies().subscribe(data=>{
      this.movies=data.data.movies;
    });
    console.log(this.movies)
  }
  ngOnInit() {
   this.getMovies();
  }
}
