import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allTrips:any;

  constructor(private router: Router, private _loginService: LoginService, private _customerService: CustomerService) {
  }

  ngOnInit() {
    this.getAllInquiry();
  }
  
  getAllInquiry() {
    this._customerService.getAllInquiryCustomers().subscribe((res: any) => {
      console.log("response=====", res.data);
      this.allTrips = res.data;
    })
  }

  userdata(id) {
    this.router.navigate(['/home/single-trip/'+id]);
  }
}
