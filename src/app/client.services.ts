import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    
    Server_URL: string = 'https://erecruit-server.herokuapp.com/';

    constructor(private httpClient: HttpClient) {}

    //!  Login/Signup

    getUsersSignup() {
        return this.httpClient.get(`${this.Server_URL}/users/signup`)
    }

    getUsersLogin() {
        return this.httpClient.get(`${this.Server_URL}/users/login`)
    }

    //! GET ALL / POST NEW
    getLogs() {
        return this.httpClient.get(`${this.Server_URL}/logs`)
    }

    //! by ID
    getLogID(logId) {
        return this.httpClient.get(`${this.Server_URL}/logs/${logId}`)
    }

    
}