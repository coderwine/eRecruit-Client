import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FullMessageComponent } from '../fullmessage/fullmessage.component';

@Component({
  selector: 'app-clientmessage',
  templateUrl: './clientmessage.component.html',
  styleUrls: ['./clientmessage.component.css']
})
export class ClientmessageComponent implements OnInit {
  messages = ['Begin Messaging...'];

  constructor() { }

  ngOnInit() {
  }

  addMessage(newMessage: string) {
    if (newMessage) {
      this.messages.push(newMessage);
      
      
    }
  }

  

  // @Output() messageEvent = new EventEmitter<string>();

  // sendMessage() {
  //   this.messageEvent.push(newMessage);
  // }

  // recieveMessage($event) {
  //   this.messages = $event
  // }
}
