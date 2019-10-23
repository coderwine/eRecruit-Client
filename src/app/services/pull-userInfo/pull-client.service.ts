import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class PullClientService {

  private RecURL = 'https://erecruit-server.herokuapp.com/client'

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'Application/json'})
  };

  constructor(
      private http: HttpClient
  ) {}
  
  getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.RecURL);
  }

  deleteClient(id: number) {
    console.log('Client Deleted');
    return this.http.delete(this.RecURL +'/'+ id);
  }
}