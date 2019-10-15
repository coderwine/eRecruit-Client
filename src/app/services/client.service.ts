import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Client[]>('/client')
  }

  register(client: Client) {
    return this.http.post('/client/register', client)
  }

  delete(fullName: string) {
    return this.http.delete(`/client/${fullName}`)
  }
}
