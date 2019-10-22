import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl = 'https://erecruit-server.herokuapp.com/client-logs'; 
  constructor( 
    private http: HttpClient
  ) { }
 
  getCustomers (): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
  }
 
  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url);
  }
 
  addCustomer (customer: Customer): Observable<Customer> {
    const url = `${this.customersUrl}`;
    return this.http.post<Customer>(url, customer, httpOptions);
  }
 
  deleteCustomer (customer: Customer | number): Observable<Customer> {
    const id = typeof customer === 'number' ? customer : customer.id;
    const url = `${this.customersUrl}/${id}`;
 
    return this.http.delete<Customer>(url, httpOptions);
  }
 
  updateCustomer (customer: Customer | number): Observable<Customer> {
    const id = typeof customer === 'number' ? customer : customer.id;
    const url = `${this.customersUrl}/${id}`;
    return this.http.put<Customer>(url, customer, httpOptions);
  }

 
}
