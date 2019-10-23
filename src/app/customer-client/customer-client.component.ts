import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerClientService } from '../customer-client.service';
@Component({
  selector: 'app-customer-client',
  templateUrl: './customer-client.component.html',
  styleUrls: ['./customer-client.component.css']
})
export class CustomerClientComponent implements OnInit {

  customers: Customer[];
 
  constructor(private customerClientService: CustomerClientService) {}
 
  ngOnInit(): void {
     this.getCustomers();
  }
 
  getCustomers() {
    return this.customerClientService.getCustomers()
               .subscribe(
                 customers => {
                  console.log(customers);
                  this.customers = customers
                 }
                );
 }
}