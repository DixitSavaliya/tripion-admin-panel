import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  
  login(jsonObj) {
    console.log("data",jsonObj);
    const data = jsonObj;
  	return this.http.post(config.baseApiUrl + "api/admin/login", data);
  }
}
