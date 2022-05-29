import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor(private http: HttpClient) { }

  getAllSeasons(): Observable<any> {
    return this.http.get<any>('https://ergast.com/api/f1/seasons.json?limit=100');
  }

  getSeason(id: string): Observable<any> {
    return this.http.get<any>('https://ergast.com/api/f1/'+ id +'.json'); 
  }
}
