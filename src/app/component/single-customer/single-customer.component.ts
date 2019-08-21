import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';
declare var $: any;


@Component({
  selector: 'app-single-customer',
  templateUrl: './single-customer.component.html',
  styleUrls: ['./single-customer.component.css']
})
export class SingleCustomerComponent implements OnInit {

  key = "tripion@raoinfor";
  customerId: any;
  customersdata: any;

  constructor(private _customerService: CustomerService, private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      this.customerId = param.id;
      this.userdata(this.customerId);
    });
  }

  ngOnInit() {
    // $(document).ready(function () {
    //   $(".btn-pref .btn").click(function () {
    //     $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    //     // $(".tab").addClass("active"); // instead of this do the below 
    //     $(this).removeClass("btn-default").addClass("btn-primary");
    //   });
    // });
  }

  userdata(id) {
    console.log("data=====userid", id);
    this._customerService.getAllCustomerDetailById(id)
      .subscribe((data: any) => {
        console.log("data", data);
        const decryptedData = CryptoJS.AES.decrypt(data.data, this.key).toString(CryptoJS.enc.Utf8);
        const decryptdata = JSON.parse(decryptedData);
        this.customersdata = decryptdata;
        console.log("customerdata", this.customersdata);
      }, err => {
        console.log('err in login===============>', err);
      })
  }
}
