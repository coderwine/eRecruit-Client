import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { PullRecService } from '../services/pull-userInfo/pull-rec.service';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user'
import { PullClientService } from '../services/pull-userInfo/pull-client.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  RecUser: User[];
  ClientUser: User[];
  recTitle = 'Recruiters';
  clientTitle = 'Clients';
  recButton: boolean = false;
  clientButton: boolean = false;
  displayedColumns = ['fullName', 'email'];
  isDeleted:boolean = false; 
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private atPullRec: PullRecService,
    private atPullClient: PullClientService,
    ) { }

  ngOnInit() {
    this.recSearch
    this.ClientSearch
  }

   recSearch(): void {
    this.atPullRec.getUsers().subscribe(data => {
      // console.log(data);
      this.RecUser = data;
      console.log(this.RecUser);
    })
  }

  // deleteRec(user: User): void {
  //   this.atPullRec.deleteRecruiter(user.id)
  //   this.RecUser = this.RecUser.filter(d => d !== user);
  
  // }
  // TRYING FOR AN ALERT - https://stackblitz.com/edit/angular-confirmation-dialog
  deleteRec(user: User): void {
    this.atPullRec.deleteRecruiter(user.id)
    this.RecUser = this.RecUser.filter(d => d !== user);
  
  }

  deleteClient(user: User): void {
    this.atPullClient.deleteClient(user.id)
    this.ClientUser = this.ClientUser.filter(c => c !== user);
  
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
