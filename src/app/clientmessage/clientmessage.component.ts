import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientmessage',
  templateUrl: './clientmessage.component.html',
  styleUrls: ['./clientmessage.component.css']
})
export class ClientmessageComponent implements OnInit {
  messages = ['Begin Messaging... '];

  constructor() { }

  ngOnInit() {
  }

  addMessage(newMessage: string) {
    if (newMessage) {
      this.messages.push(newMessage);
      
      
    }

  }
}
