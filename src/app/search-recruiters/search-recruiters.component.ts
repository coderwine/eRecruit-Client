import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

import { User } from '../models/user'
import { PullRecService } from '../services/pull-userInfo/pull-rec.service';

@Component({
  selector: 'app-search-recruiters',
  templateUrl: './search-recruiters.component.html',
  styleUrls: ['./search-recruiters.component.css']
})
export class SearchRecruitersComponent implements OnInit {


  RecUser: User[];
  recTitle = 'Recruiters';
  displayedColumns = ['fullName', 'email'];
  isDeleted:boolean = false; 
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private atPullRec: PullRecService
    ) { }

    ngOnInit() {
      this.recSearch
    }
  
    recSearch(): void {
      this.atPullRec.getUsers().subscribe(data => {
        // console.log(data);
        this.RecUser = data;
        console.log(this.RecUser);
      })
    }



  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
