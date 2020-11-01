import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieServiceService } from './services/movie-service.service';
import { HttpClientModule  } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { UpComingMoviesComponent } from './up-coming-movies/up-coming-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TopRatedMoviesComponent,
    UpComingMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
