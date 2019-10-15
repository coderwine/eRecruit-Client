import {Component, OnInit, Input} from '@angular/core';
import { Users } from '../users';


//! Need to break down what is being pulled and what is needed.
export interface ClientInformation {
  fullName: string;
  email: string;
  skills: string;
  location: string;
  li: string;
  gh: string;
  comments: string
}

const ELEMENT_DATA: ClientInformation[] = [
  {fullName: `fullname`, email: `email`, skills: 'being a boss', location: "Harrisburgh, PA", li: "www.linkedin.com/rick-james", gh:"www.github.com/rjames", comments: "Im good at stuff"}
 ];

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css']
  })
export class ClientComponent implements OnInit {

  displayedColumns: string[] = ['fullName', 'email', 'skills', 'location', 'li', 'gh', 'comments'];
  dataSource = ELEMENT_DATA;


  ngOnInit() {
  }
  
}