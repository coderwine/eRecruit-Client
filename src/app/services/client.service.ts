import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  private serverURL = 'erecruit-server.herokuapp.com/users'

  getAll() {
    return this.http.get<Client[]>(this.serverURL)
  }

  register(client: Client) {
    return this.http.post(`${this.serverURL}/signup`, client)
  }

  delete(fullName: string) {
    return this.http.delete(`${this.serverURL}/${fullName}`)
  }
}
