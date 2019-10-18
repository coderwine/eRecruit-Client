import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthenticationService} from '../services/authentication.service';


@Component({
  selector: 'app-full',
  templateUrl: 'full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  
  

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
