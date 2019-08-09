import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	// encryptdata:
	logindata = {
		email: "admin@gmail.com",
		password: "admin@123"
	}

	loginForm: FormGroup;
	submitted = false;
	key = "tripion@raoinfotech";
	constructor(private formBuilder: FormBuilder, private router: Router, private _loginService: LoginService) {
	}

	/** ngonit call */
	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			emailId: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	get f() { return this.loginForm.controls; }

	/** Admin login */
	onSubmit(data) {
		console.log("data", data);
		const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), this.key).toString();
		console.log("string===",typeof encrypted);
		const json = {encrypted};
		this.submitted = true;
		if (this.loginForm.invalid) {
			return;
		}
		this._loginService.login(json).pipe(first())
			.subscribe(data => {
				console.log("data", data)
			})
	}
}