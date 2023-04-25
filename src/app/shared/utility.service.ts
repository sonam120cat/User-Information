import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }
  getConfig() {
    let configUrl = "https://jsonplaceholder.typicode.com/users";
    return this.http.get<any>(configUrl);
  }
}
