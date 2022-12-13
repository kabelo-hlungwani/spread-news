import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpreadnewsService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3000"

//account methods
  create(data: any) {
    return this.http.post(this.baseUrl+'/register', data);
  }

  login(data: any){
    return this.http.post(this.baseUrl+'/login', data);
  }
}
