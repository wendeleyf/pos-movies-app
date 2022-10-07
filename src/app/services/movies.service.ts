import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=ac56413fd89c87bb8d836b4c093a9c61&language=pt-BR&page=1')
  }
}
