import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthenticationService } from './services/authentication.service'; 
import { Client } from './models/user'; 

@Component({

  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'e-recruit';
  currentClient: Client; 

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentClient.subscribe(x => this.currentClient = x); 
  }

  logout() {
    this.authenticationService.logout(); 
    this.router.navigate(['/login']); 
  }
}
