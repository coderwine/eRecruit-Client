import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms'
import {AuthenticationService} from '../services/authentication.service';
import { ClientInformation } from '../client/client.component';
import {JobBoardAPI} from '../services/apicall.service'
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-full',
  templateUrl: 'full.component.html',
  styleUrls: ['./full.component.css'],
  providers: [JobBoardAPI]
})
export class FullComponent implements OnInit {
  searchJobs: any;

  client: ClientInformation = {

    fullName: clientInformation["fullName"],
    email: "bj@test.com",
    skills: "JavaScript",
    location: "Indianapolis, IN",
    li: "linkedin.com/bj",
    gh: "github.io/bj14",
    comments: " "
  }


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
}
