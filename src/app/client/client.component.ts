import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';



//! Need to break down what is being pulled and what is needed.
export interface ClientInformation {
  fullName: string,
  email: string,
  skills: string,
  location: string,
  li: string,
  gh: string,
  comments: string
}



@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css']
  })

// export class DialogResultExample {
//   selectedOption: string;

//   constructor(public dialog: MatDialog) {}

//   openDialog() {
//     let dialogRef = this.dialog.open(DialogResultExampleDialog);
//     dialogRef.afterClosed().subscribe(result => {
//       this.selectedOption = result;
//     });
//   }
// }

// export class DialogResultExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogResultExampleDialog>) {}
// }

export class ClientComponent implements OnInit {

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