import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {
FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray
} from '@angular/forms';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accountList : any ;
  sortForm : FormGroup;
  searchForm: FormGroup;

  constructor(
    private as : AccountService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.refreshNgOnInit();
    this.formInit();
  }

  refreshNgOnInit(){
    this.as.getAllAccounts().toPromise()
    .then((res:any)=>{
      this.accountList = res.data;
    })
  }

  formInit(){
    this.sortForm = this.fb.group({
      type : ['']
    })

    this.searchForm = this.fb.group({
      str : [""]
    })
  }

}
