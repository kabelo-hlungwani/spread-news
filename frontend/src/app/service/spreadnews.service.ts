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

  currentUser(id: any){
    return this.http.get(this.baseUrl+'/currentUser/'+id);
  }
  updateprofile(id:any,data: any){
    return this.http.put(`${this.baseUrl+'/updateprofile'}/${id}`, {data});
  }

  addArticle(data:any){
    return this.http.post(this.baseUrl+'/addArticle/', data);
  }
  
  adminstories(id: any){
    return this.http.get(this.baseUrl+'/adminstories/'+id);
  }
  deladminstories(id: any){
    return this.http.get(this.baseUrl+'/deladminstories/'+id);
  }
  authors(){
    return this.http.get(this.baseUrl+'/authors');
  }

  allArticles(){
    return this.http.get(this.baseUrl+'/allArticles');
  }

  countauthor(){
    return this.http.get(this.baseUrl+'/countauthor');
  }
  countarticle(){
    return this.http.get(this.baseUrl+'/countarticle');
  }
  category(){
    return this.http.get(this.baseUrl+'/category');
  }
  viewstory (id: any){
    return this.http.get(this.baseUrl+'/viewstory/'+id);
  }
  archiveBooking(id:any){
    return this.http.put(`${this.baseUrl+'/archiveBooking'}/${id}`, {});
  }

  restoreStory(id:any){
    return this.http.put(`${this.baseUrl+'/restoreStory'}/${id}`, {});
  }
  categoryId (id: any){
    return this.http.get(this.baseUrl+'/categoryId/'+id);
  }
  articlebtId (id: any){
    return this.http.get(this.baseUrl+'/articlebtId/'+id);
  }
  removecat (id: any){
    return this.http.delete(this.baseUrl+'/removecat/'+id);
  }
  activate (id:any){
    return this.http.put(`${this.baseUrl+'/activate'}/${id}`, {});
  }
  suspend (id:any){
    return this.http.put(`${this.baseUrl+'/suspend'}/${id}`, {});
  }
  
}
