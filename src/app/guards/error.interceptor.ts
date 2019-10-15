//The HTTP Interceptor helps protect the website from unauthorized access. In this, if there is a discrepancy in the client information that was logged, it will automatically log out the client.

import {Injectable} from '@angular/core'; 
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators'; 
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            //this is where the client with incorrect information will be logged out. If the error is 401, the site will logout the user and reload the page.
            if (err.status === 401) {
                this.authenticationService.logout(); 
                location.reload(true);
            }

            const error = err.error.message || err.statusText; 
            return throwError(error);
        })) 
    }
} 