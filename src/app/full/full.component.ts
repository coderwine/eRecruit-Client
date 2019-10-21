import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import { ClientInformation } from '../client/client.component';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-full',
  templateUrl: 'full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

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
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
