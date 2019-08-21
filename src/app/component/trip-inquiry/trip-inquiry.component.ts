import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-trip-inquiry',
  templateUrl: './trip-inquiry.component.html',
  styleUrls: ['./trip-inquiry.component.css']
})
export class TripInquiryComponent implements OnInit {

  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this.getAllInquiry();
  }

  getAllInquiry() {
    this._customerService.getAllInquiryCustomers().subscribe((res: any) => {
      console.log("response=====", res);
    })
  }
}
