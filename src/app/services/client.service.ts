import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  private serverURL = 'erecruit-server.herokuapp.com/users'

  getAll() {
    return this.http.get<User[]>(this.serverURL)
  }

  delete(fullName: string) {
    return this.http.delete(`${this.serverURL}/${fullName}`)
  }
}
