import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-full',
  templateUrl: 'full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  name = [Client.name]
  constructor() { }

  ngOnInit() {
    
    
  }

}
