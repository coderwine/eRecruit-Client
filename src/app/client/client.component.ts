import {Component, OnInit, Input} from '@angular/core';
import { ClientService } from '../client.service';

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
//   {firstName: "Rick", lastName: "James", email: "rickjames@rj.com", skills: 'being a boss', location: "Harrisburgh, PA", li: "www.linkedin.com/rick-james", gh:"www.github.com/rjames", comments: "Im good at stuff"},
//   {firstName: "Rick", lastName: "James", email: "rickjames@rj.com", skills: 'being a boss', location: "Harrisburgh, PA", li: "www.linkedin.com/rick-james", gh:"www.github.com/rjames", comments: "Im good at stuff"},
//   {firstName: "Rick", lastName: "James", email: "rickjames@rj.com", skills: 'being a boss', location: "Harrisburgh, PA", li: "www.linkedin.com/rick-james", gh:"www.github.com/rjames", comments: "Im good at stuff"}
// //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
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