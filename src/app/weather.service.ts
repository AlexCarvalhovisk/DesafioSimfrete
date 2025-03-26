import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '45f8d6a48ac2279c8954243037bb47b8';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`;
    return this.http.get(url).pipe(
      catchError((error) => {
        return throwError(() => new Error(error));
      })
    );
  }
}
