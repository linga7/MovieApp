import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-up-coming-movies',
  templateUrl: './up-coming-movies.component.html',
  styleUrls: ['./up-coming-movies.component.scss']
})
export class UpComingMoviesComponent implements OnInit {

  public upcomingMoviesList:any;
  
   constructor(private dataservices: MovieServiceService) {
   
    }
 
   ngOnInit() {
     this.getUpComingMovies();
   }
 
   getUpComingMovies(){
     this.dataservices.getUpComingMovies().subscribe(res => {
       this.upcomingMoviesList = res['results'];
       console.log("upcomingMoviesList",this.upcomingMoviesList)
     },
     error => {
       console.log("Error in getting getRegionsList..."+JSON.stringify(error));
     }
   );
   }
 }