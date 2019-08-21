import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { AlertService } from '../../services/aleart.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	submitted = false;
	key = "tripion@raoinfor";
	show = false;

	constructor(private formBuilder: FormBuilder, private router: Router, private _loginService: LoginService, public _alertService: AlertService) {
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
		const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), this.key).toString();
		const json = { encrypted };
		this.submitted = true;
		if (this.loginForm.invalid) {
			return;
		}
		this._loginService.login(json)
			.subscribe((data: any) => {
				console.log("data", data);
				this._alertService.successAlert(data.message);
				this.router.navigate(['/home/dashboard']);
			}, err => {
				console.log('err in login===============>', err);
				this._alertService.failurAlert(err.error.message);
			})
	}

	/** Password hide and show */
	password() {
		this.show = !this.show;
	}
}