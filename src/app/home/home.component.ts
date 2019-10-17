import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {User} from '../models/user';
import {ClientService} from '../services/client.service';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentClient: User; 
  clients = []

  constructor(
    private authenticationService: AuthenticationService,
    private clientService: ClientService,
    private router: Router
  ) {
      this.currentClient = this.authenticationService.currentUserValue
   }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout(); 
    this.router.navigate(['/login']); 
  }
}
