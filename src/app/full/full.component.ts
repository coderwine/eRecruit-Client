import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import { ClientInformation } from '../client/client.component';
import {JobBoardAPI} from '../services/apicall.service'
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Users } from '../users';



@Component({
  selector: 'app-full',
  templateUrl: 'full.component.html',
  styleUrls: ['./full.component.css'],
  providers: [JobBoardAPI]
})
export class FullComponent implements OnInit {
  searchJobs: any;

  


  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private jobBoardAPI: JobBoardAPI
  ) { }

  ngOnInit() {
  }

  search(): void {
      this.router.navigate(['/jobs'])
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  message() {
    this.router.navigate(['/messaging'])
  }
}
