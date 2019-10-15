import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { BehaviorSubject, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators'; 
import { Client } from '../models/client'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Client>;
  public currentClient: Observable<Client>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<Client>(JSON.parse(localStorage.getItem('currentClient')))
    this.currentClient = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Client {
    return this.currentUserSubject.value;
  }

  login(email, password) {
    return this.http.post<any>('/client/authenticate', {email, password})
    .pipe(map(client => {
      localStorage.setItem('currentClient', JSON.stringify(client));
      this.currentUserSubject.next(client);
      return client;
    }));
  }

  logout() {
    localStorage.removeItem('currentClient');
    this.currentUserSubject.next(null);
  }
}
