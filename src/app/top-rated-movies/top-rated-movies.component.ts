import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {

  public topRatedMoviesList:any;
  // public base_url = "https://image.tmdb.org/t/p/original/";
 
   constructor(private dataservices: MovieServiceService) {
   
    }
 
   ngOnInit() {
     this.getTopRatedMovies();
   }
 
   getTopRatedMovies(){
     this.dataservices.getTopRatedMovies().subscribe(res => {
       this.topRatedMoviesList = res['results'];
       console.log("topRatedMoviesList",this.topRatedMoviesList)
     },
     error => {
       console.log("Error in getting getRegionsList..."+JSON.stringify(error));
     }
   );
   }
 }
 
