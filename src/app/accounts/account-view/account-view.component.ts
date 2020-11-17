import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  AccountID : any;
  AccountObj : any;
  loaded : boolean = false;
  fullName : any;

  constructor(
    private route : ActivatedRoute,
    private as : AccountService
  ) { }

  ngOnInit(): void {
    this.refreshNgOnInit();
  }

  refreshNgOnInit(){
    this.AccountID = this.route.snapshot.paramMap.get('id');
    this.getAccount();
  }

  getAccount(){
    this.as.getAccount(this.AccountID).toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        this.AccountObj = res.data;
        this.fullName = this.AccountObj.first_name + " "+ this.AccountObj.last_name;
        this.loaded = true;
        console.log(this.AccountObj);
      }
    })
  }

}
