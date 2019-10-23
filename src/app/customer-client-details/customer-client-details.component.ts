import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerClientService } from '../customer-client.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-client-details.component.html',
  styleUrls: ['./customer-client-details.component.css']
})
export class CustomerClientDetailsComponent implements OnInit {
 
  customer = new Customer() ;
  submitted = false;
  message: string;
 
  constructor(
    private customerClientService: CustomerClientService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerClientService.getCustomer(id)
      .subscribe(customer => this.customer = customer);
  }
 
  update(): void {
    this.submitted = true;
    this.customerClientService.updateCustomer(this.customer)
        .subscribe(() => this.message = "Customer Updated Successfully!");
  }
 
  delete(): void {
    this.submitted = true;
    this.customerClientService.deleteCustomer(this.customer.id)
        .subscribe(()=> this.message = "Customer Deleted Successfully!");
  }
 
  goBack(): void {
    this.location.back();
  }
}

