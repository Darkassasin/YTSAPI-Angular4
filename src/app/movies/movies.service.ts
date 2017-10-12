import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class MovieService{

  private apiUrl='https://yts.ag/api/v2/list_movies.json';
  movies: any={};


  constructor(private http:Http){
  }

  getMovies():any{
    return this.http.get(this.apiUrl).map((res:Response)=>res.json());
  }

  getMovie(id:number):any{
    return this.getMovies().then(movies=>movies.find(hero=>hero.id===id));
  }
}