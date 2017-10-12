import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from 'app/movies/movies.service';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'movies',
        component: MoviesComponent
      }
    ])
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
