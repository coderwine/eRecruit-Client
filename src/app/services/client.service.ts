import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  private serverURL = 'https://erecruit-server.herokuapp.com/users'


  delete(fullName: string) {
    return this.http.delete(`${this.serverURL}/${fullName}`)
  }
  
}
