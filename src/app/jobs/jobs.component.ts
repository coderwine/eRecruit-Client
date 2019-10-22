import { Component, OnInit } from '@angular/core';
import {JobBoardAPI} from '../services/apicall.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  searchJobs: any;

  constructor(
    private route: ActivatedRoute,
    private jobBoardAPI: JobBoardAPI
    ) { }

  ngOnInit() {
      this.jobBoardAPI.getJobs().subscribe(data => {
        this.searchJobs = data;
        console.log(this.searchJobs)
    })
  }

}
