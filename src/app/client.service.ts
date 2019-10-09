import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Client } from '../../../eRecruit-Server/models/client';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class ClientService {

    private clientURL = `https://localhost:3200`;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'Application/json'})
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) {} 
    
    // People from API
    getPeople (): Observable<Client[]> {
        return this.http.get<Client[]>(this.clientURL)
        .pipe(
            tap(_=> this.log('fetched Forced')),
            catchError(this.handleError<Client[]>('Wars in Stars', []))
        );
    }

    
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    private log(message:string) {
        this.messageService.add(`Looking for?... ${message}`);
    }

}


// // GET by ID
    // getPerson<Data>(id:number): Observable<People> {
    //     const url = `${this.swapiURL}/?id=${id}`;
    //     return this.http.get<People[]>(url)
    //     .pipe(
    //         map(someJedi => someJedi[0]),
    //         tap(h => {
    //             const outcome = h ? `fetched` : `not what you were looking for`;
    //             this.log(`${outcome} person id=${id}`);
    //         }),
    //         catchError(this.handleError<People>(`getPerson id=${id}`))
    //     );
    // }

    // // GET people w/ Search Term
    // searchPeople(term: string): Observable<People[]> {
    //     if(!term.trim()) {
    //         return of ([]);
    //     }
    //     return this.http.get<People[]>(`${this.swapiURL}/?name=$${term}`).pipe(
    //         tap(_=> this.log(`Found the some possible Rebels matching "${term}"`)),
    //         catchError(this.handleError<People[]>('searchPeople', []))
    //     );
    // }
