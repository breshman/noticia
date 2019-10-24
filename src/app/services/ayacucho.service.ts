import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AyacuchoService {

  constructor(private http: HttpClient) { }

    getLista(){
        return this.http.get('http://gis.sedaayacucho.pe:8000/api/test');
    }

}
