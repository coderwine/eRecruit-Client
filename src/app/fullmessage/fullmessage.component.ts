import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-message',
  templateUrl: './fullmessage.component.html',
  styleUrls: ['./fullmessage.component.css']
})
export class FullMessageComponent implements OnInit {
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
