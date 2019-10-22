import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import {Jobs} from '../models/jobs';

@Injectable({
    providedIn: 'root'
})

export class JobBoardAPI {

    private jobBoardURL = 'https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=cf1acfdb39dea5fc2e2ea6b394c2a247&method=aj.jobs.search&perpage=100&format=json'

    httpOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'Application/json',
            'Access-Control-Allow-Origin': '*'
        })
    };

    constructor(
        private http: HttpClient
    ) {}
    
    getJobs(): Observable<Jobs[]> {
        return this.http.get<Jobs[]>(this.jobBoardURL);
    }
}