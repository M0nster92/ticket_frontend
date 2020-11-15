import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {
FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray
} from '@angular/forms';
import {DropdownService} from "../../services/dropdown.service";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accountList : any ;
  sortForm : FormGroup;
  searchForm: FormGroup;
  account_types : any;
  accountCount : any;
  loaded : boolean = false;
  p: any;

  constructor(
    private as : AccountService,
    private fb: FormBuilder,
    private ds : DropdownService
  ) { }

  ngOnInit(): void {
    this.refreshNgOnInit();
    
  }

  refreshNgOnInit(){
    this.formInit();
    this.Accounts();
    this.AccountTypes();
  }

  AccountTypes(){
    this.account_types = this.ds.getAccountTypes();
  }

  Accounts(){
    this.as.getAllAccounts().toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        this.accountList = res.data;
        this.loaded = true;
        this.countAccount();
      }
      
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

  onChangeType(){
    if(this.sortForm.controls["type"].value != ""){
      this.as.getAccountByTypes(this.sortForm.controls["type"].value).toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        this.accountList = res.data;
        this.loaded = true;
        this.countAccount();
      } else {
        this.Accounts();
        this.countAccount();
      }
    })
    } else {
      this.Accounts();
      this.countAccount();
    }
    this.countAccount();
    
  }

  countAccount(){
    if(this.accountList){
      this.accountCount = this.accountList.length;
    } else {
      this.accountCount = 0;
    }
  }

  onSearchString(event : any){
    if(event.target.value.length > 2 ){
      console.log(event.target.value);
      this.accountList = [];
      this.as.searchAccount(event.target.value).toPromise()
      .then((res:any)=>{
        if(res.status =="ok"){
          this.accountList = res.data;
          this.countAccount();

        }
      })
    } else {
      this.Accounts();
      this.countAccount();
    }
  }

}
