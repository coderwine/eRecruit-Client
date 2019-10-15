import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {Client} from '../models/client';
import {ClientService} from '../services/client.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentClient: Client; 
  clients = []

  constructor(
    private authenticationService: AuthenticationService,
    private clientService: ClientService
  ) {
      this.currentClient = this.authenticationService.currentUserValue
   }

  ngOnInit() {
    this.loadAllClients();
  }

  deleteUser(fullName: string) {
    this.clientService.delete(fullName)
    .pipe(first())
    .subscribe(() => this.loadAllClients())
  }

  private loadAllClients() {
    this.clientService.getAll()
    .pipe(first())
    .subscribe(clients => this.clients = clients);
  }

}
