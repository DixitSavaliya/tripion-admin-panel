import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { AlertService } from '../../services/aleart.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-all-customers-list',
  templateUrl: './all-customers-list.component.html',
  styleUrls: ['./all-customers-list.component.css']
})
export class AllCustomersListComponent implements OnInit {

  key = "tripion@raoinfor";
  customersdata: any;

  constructor(private _customerService: CustomerService, public _alertService: AlertService, private router: Router) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  /** Get All Customers */
  getAllCustomers() {
    this._customerService.getAllCustomer()
      .subscribe((data: any) => {
        console.log("data", data);
        const decryptedData = CryptoJS.AES.decrypt(data.data, this.key).toString(CryptoJS.enc.Utf8);
        const decryptdata = JSON.parse(decryptedData);
        this.customersdata = decryptdata;
        console.log("customerdata==", this.customersdata);
      }, err => {
        console.log('err in login===============>', err);
      })
  }

  /** Single Customer */
  userdata(id) {
    console.log("data=====userid", id);
    this._customerService.getAllCustomerDetailById(id)
      .subscribe((data: any) => {
        console.log("data", data);
        this.router.navigate(['/home/single-customer/' + id]);
      }, err => {
        console.log('err in login===============>', err);
      })
  }
}
