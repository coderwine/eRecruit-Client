
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

import { User } from '../models/user'
import { PullClientService } from '../services/pull-userInfo/pull-client.service';

@Component({
  selector: 'app-search-clients',
  templateUrl: './search-clients.component.html',
  styleUrls: ['./search-clients.component.css']
})
export class SearchClientsComponent implements OnInit {


  ClientUser: User[];
  clientTitle = 'Clients';
  displayedColumns = ['fullName', 'email'];
  isDeleted:boolean = false; 
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private atPullClient: PullClientService
    ) { }

  ngOnInit() {
    this.ClientSearch
  }


  ClientSearch(): void {
    this.atPullClient.getUsers().subscribe(data => {
      // console.log(data);
      this.ClientUser = data;
      console.log(this.ClientUser);
    })
  }



  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
