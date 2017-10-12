import { Component, OnInit } from '@angular/core';
import { MovieService } from 'app/movies/movies.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  constructor(
    private movieService:MovieService,
    private location:Location
  ) { }

  ngOnInit() {
    
  }

  getMovieDetail(){

  }
  goback(){
    this.location.back();
  }
}
