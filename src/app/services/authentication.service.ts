import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { BehaviorSubject, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators'; 
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentClient: Observable<User>;
  private serverURL = 'https://erecruit-server.herokuapp.com';
  // private http: HttpClient;


  HttpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentClient')))
    this.currentClient = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  //! LOGIN
  //? Recruiter
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.serverURL}/users/login`, {email, password})
    .pipe(map(client => {
      localStorage.setItem('currentClient', JSON.stringify(client));
      this.currentUserSubject.next(client);
      return client;
    }));
  }

  //? CLient
  loginClient(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.serverURL}/client/login`, {email, password})
    .pipe(map(client => {
      localStorage.setItem('currentClient', JSON.stringify(client));
      this.currentUserSubject.next(client);
      return client;
    }));
  }

  //? Admin
  loginAdmin(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.serverURL}/admin/login`, {email, password})
    .pipe(map(client => {
      localStorage.setItem('currentClient', JSON.stringify(client));
      this.currentUserSubject.next(client);
      return client;
    }));
  }


  //! SIGN UP
  //? Recruiter
  signup(user: User): Observable<User> {
    return this.http.post<User>(`${this.serverURL}/users/signup`, user)
    .pipe(map(client => {
      localStorage.setItem('currentClient', JSON.stringify(client));
      this.currentUserSubject.next(client);
      console.log('Recruiter SIGNUP')
      return client;
    }))
  }

  //? Client
  signupClient(user: User): Observable<User> {
    return this.http.post<User>(`${this.serverURL}/client/signup`, user)
    .pipe(map(client => {
      localStorage.setItem('currentClient', JSON.stringify(client));
      this.currentUserSubject.next(client);
      console.log('Client SIGNUP')
      return client;
    }))
  }

  // *ALL ADMINS ARE CREATED VIA POSTMAN

  logout() {
    localStorage.removeItem('currentClient');
    this.currentUserSubject.next(null);
    console.log("CLEAR! *shocks patient*");
  }
}
