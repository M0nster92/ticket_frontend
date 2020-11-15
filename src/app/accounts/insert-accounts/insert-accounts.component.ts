import { Component, OnInit } from '@angular/core';
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray, Form
} from '@angular/forms';

@Component({
  selector: 'app-insert-accounts',
  templateUrl: './insert-accounts.component.html',
  styleUrls: ['./insert-accounts.component.css']
})
export class InsertAccountsComponent implements OnInit {

  accountForm : FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.accountForm = this.fb.group({
      first_name: [""],
      last_name : [""],
      email : [""],
      password : [""],
      company_name : [""],
      mobile_phone : [""],
      street : [""],
      city : [""],
      province : [""],
      postal_code : [""],
      account_type : [""],
      user_name : [""]
    })
  }

}
