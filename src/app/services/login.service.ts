import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  key = "tripion@raoinfor";

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem("admin"));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  /** admin login */
  login(jsonObj) {
    const data = jsonObj;
    return this.http.post(config.baseApiUrl + "api/admin/login", data)
      .pipe(map((user: any) => {
        console.log("login user=========>", user);
        if (user) {
          const decryptedData = CryptoJS.AES.decrypt(user.token, this.key).toString(CryptoJS.enc.Utf8);
          const decryptdata = JSON.parse(decryptedData);
          localStorage.setItem("admin", decryptdata.data.emailId);
          localStorage.setItem("token", decryptdata.token);
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  /**  admin logout */
  logout() {
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
  }

}
