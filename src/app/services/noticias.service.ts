import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
      private http: HttpClient
  ) { }

  getNoticias(){
      return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a8919410736487c9647728c0e68513d`)
  }



}
