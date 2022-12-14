import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountiresWithRestApi(url: any) {
    let data = this.http.get('https://restcountries.com/v3.1/all');
    return this.http.post;
  }
}
