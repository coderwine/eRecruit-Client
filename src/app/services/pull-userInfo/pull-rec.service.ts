import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import {User} from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class PullRecService {

  private RecURL = 'https://erecruit-server.herokuapp.com/users'

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'Application/json'})
  };

  constructor(
      private http: HttpClient
  ) {}
  
  getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.RecURL);
  }

  // deleteRecruiter(id: number) {
  //   console.log('DELETE-ISH');
  //   return this.http.delete(this.RecURL +'/'+ id);
  // }

  deleteRecruiter(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.RecURL}/${id}`;
    console.log('new delete')
    return this.http.delete<User>(url, httpOptions);
  }
}  