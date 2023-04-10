import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer'; // Import the module where Customer is defined

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  customers: Observable<Customer[]> = new Observable<Customer[]>();
  newCustomer = new Customer(0, '', '', '',''); // Create a new instance of Customer
  addCustomer: any;
  
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }
  onSubmit(): void {
    this.addCustomer();
  }
}

