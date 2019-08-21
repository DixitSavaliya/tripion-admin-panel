import { Component, OnInit } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit {

  planForm: FormGroup;
  paymentForm: FormGroup;
  addTicketForm: FormGroup;
  content;
  submitted = false;
  isDisable = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.planForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });

    this.paymentForm = this.formBuilder.group({
      amount: ['', Validators.required],
      content: ['', Validators.required],
      discount: ['', Validators.required]
    });

    this.addTicketForm = this.formBuilder.group({
      nameOfPassenger: ['', Validators.required],
      date: ['', Validators.required],
      path: ['', Validators.required]
    });


  }
  public Editor = DecoupledEditor;
  public configuration = { placeholder: 'Enter Comment Text...' };
  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }
  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    this.content = data;
    console.log("content===========>", this.content)
  }

  get f() { return this.planForm.controls; }

  addplan(data) {
    this.submitted = true;
    this.isDisable = true;
    data = {
      title: data.title,
      content: this.content
    }
    console.log("data===", data);
  }

  senddocumentrequest(data) {
    this.submitted = true;
    this.isDisable = true;
    console.log("data=====", data);
  }

  get f1() { return this.paymentForm.controls; }

  sendPaymentRequest(data) {
    this.submitted = true;
    this.isDisable = true;
    console.log("data===", data);
  }

  get f2() { return this.addTicketForm.controls; }

  addTicket(data) {
    this.submitted = true;
    this.isDisable = true;
    console.log("data===", data);
  }

}
