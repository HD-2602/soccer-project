import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherURL: string = "http://localhost:3000/api/weather"

  constructor( private http: HttpClient) { }

  searchWeather(city: string){
    return this.http.get<{ result: any }>(`${this.weatherURL}/${city}`);
  }
}
