import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class apiService {
  constructor(private http: HttpClient) { }
  getLocation(url:string) {
    return this.http.get(url);
    }
}