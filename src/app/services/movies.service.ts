import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl:string = 'https://api.themoviedb.org/3';
  apiKey:string = 'ac56413fd89c87bb8d836b4c093a9c61'

  constructor(private http: HttpClient) { }

  getMovies(type: string = 'upcoming'){
    return this.http.get(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}&language=pt-BR&page=1`)
  }
}
