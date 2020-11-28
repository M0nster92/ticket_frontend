import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from "../../services/account.service";
import {MatTableDataSource, MatDialog, MatDialogModule, MatDialogConfig} from '@angular/material';
import {SubscribeDeviceComponent} from "../subscribe-device/subscribe-device.component";
import {SubscribePackageComponent} from "../subscribe-package/subscribe-package.component";

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
  options: Boolean = false;


  //subscription_table boolean
  subscription_option: boolean = false;
  subscription_device : boolean = false;
  subscription_package : boolean = false;
  subscription_billing : boolean = false;
  subscription_default : boolean = true;

  constructor(
    private route : ActivatedRoute,
    private as : AccountService,
    private dialog : MatDialog
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
      console.log(res);
      if(res.status == "ok"){
        this.AccountObj = res.data;
        this.fullName = this.AccountObj.first_name + " "+ this.AccountObj.last_name;
        this.loaded = true;
        console.log(this.AccountObj);
      }
    })
  }

  option(){
    
  }

  sub() {
    this.subscription_option = !this.subscription_option;
    this.options != this.options;
  }

  subscriptionDevice(){
    this.subscription_device = true;
    this.subscription_package  = false;
    this.subscription_billing  = false;
    this.subscription_default = false;
  }

  subscriptionPackage(){
    this.subscription_device = false;
    this.subscription_package  = true;
    this.subscription_billing  = false;
    this.subscription_default = false;
  }

  subscriptionBilling(){
    this.subscription_device = false;
    this.subscription_package  = false;
    this.subscription_billing  = true;
    this.subscription_default = false;
  }

  subscriptionBack(){
    this.subscription_device = false;
    this.subscription_package  = false;
    this.subscription_billing  = false;
    this.subscription_default = true;
  }

  newDevice(){
    const NewDeviceConfig = new MatDialogConfig();
    NewDeviceConfig.autoFocus = true;
    NewDeviceConfig.width = "60%";
    NewDeviceConfig.data = this.AccountObj;
    this.dialog.open(SubscribeDeviceComponent, NewDeviceConfig)
    .afterClosed()
    .subscribe(()=>this.ngOnInit());
  }

  newPackage(){
    const NewPackageConfig = new MatDialogConfig();
    NewPackageConfig.autoFocus = true;
    NewPackageConfig.width = "60%";
    NewPackageConfig.data = this.AccountObj;
    this.dialog.open(SubscribePackageComponent, NewPackageConfig)
    .afterClosed()
    .subscribe(()=>this.ngOnInit());
  }

}
