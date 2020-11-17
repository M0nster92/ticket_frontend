import { Component, OnInit } from '@angular/core';
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray, Form
} from '@angular/forms';
import { DropdownService } from 'src/app/services/dropdown.service';
import {AccountService} from "../../services/account.service";
import swal from 'sweetalert2';

@Component({
  selector: 'app-insert-accounts',
  templateUrl: './insert-accounts.component.html',
  styleUrls: ['./insert-accounts.component.css']
})
export class InsertAccountsComponent implements OnInit {

  accountForm : FormGroup;
  account_types : any;

  constructor(
    private fb: FormBuilder,
    private dropdown: DropdownService,
    private as : AccountService,
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.account_types = this.dropdown.getAccountTypes();
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
      user_name : [""],
      status : [""]
    })
  }

  submit(){
    console.log(this.accountForm.getRawValue());
  }

  checkCheckBoxvalue(event){
    console.log(event.target.checked)
  }

}
