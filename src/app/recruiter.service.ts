import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
// import { catcherror, map, tap } from 'rxjs/operators';

import { Users } from './users';

@Injectable({
    providedIn: 'root'
})

export class RecruiterService {
    
    Server_URL: string = 'https://erecruit-server.herokuapp.com';

    httpOptions  = {
        headers: new HttpHeaders({ 'Content Type': 'Application/json'})
    };

    constructor(private httpClient: HttpClient) {}

    

    postUsersSignup() {
        return this.httpClient.post(`${this.Server_URL}users/signup`, null)
    }

    // postUsersLogin() {
    //     return this.httpClient.post(`${this.Server_URL}users/login`)
    // }

    // getLogs() {
    //     return this.httpClient.get(`${this.Server_URL}logs`)
    // }


    // getLogID(logId) {
    //     return this.httpClient.get(`${this.Server_URL}logs/${logId}`)
    // }

    
}