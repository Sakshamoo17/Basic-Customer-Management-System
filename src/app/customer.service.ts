import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor() { }
   // Get all customers
   getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }

  // Get a single customer by ID
  getCustomer(id: number): Observable<Customer | undefined> {
    return of(CUSTOMERS.find(customer => customer.id === id));
  }

  addCustomer(customer: Customer): void {
    CUSTOMERS.push(customer);
  }

}
