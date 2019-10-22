import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userinfo } from './userinfo';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  private UserinfoUrl = 'https://erecruit-server.herokuapp.com/users';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }
 
  getUserinfos (): Observable<Userinfo[]> {
    return this.http.get<Userinfo[]>(this.UserinfoUrl)
  }
 
  getUserinfo(id: number): Observable<Userinfo> {
    const url = `${this.UserinfoUrl}/${id}`;
    return this.http.get<Userinfo>(url);
  }
 

}

