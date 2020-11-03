import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }
  getTopRatedMovies(): Observable<any>{
    return this.http.get(environment. base_url + '/discover/movie?api_key=e509ba870a766d77cb406e437abdb52e&with_genres=28')
  }
  getUpComingMovies(): Observable<any>{
    return this.http.get(environment. base_url + '/discover/tv?api_key=e509ba870a766d77cb406e437abdb52e&with_networks=213')
  }
}
