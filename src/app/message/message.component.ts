import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
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
