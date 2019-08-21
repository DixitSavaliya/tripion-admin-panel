import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomer() {
    return this.http.get(config.baseApiUrl + "api/admin/get-all-users");
  }

  getAllCustomerDetailById(userId) {
    console.log("userid=====",userId);
    return this.http.get(config.baseApiUrl + "api/admin/get-user-by-id/"+userId);
  }
  getAllInquiryCustomers() {
    return this.http.get(config.baseApiUrl + "api/trip/get-all-trips");
  }
}
