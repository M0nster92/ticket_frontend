import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from "../../services/account.service";
import {MatTableDataSource, MatDialog, MatDialogModule, MatDialogConfig} from '@angular/material';
import {SubscribeDeviceComponent} from "../subscribe-device/subscribe-device.component";
import {SubscribePackageComponent} from "../subscribe-package/subscribe-package.component";
import {InsertTicketComponent} from "../../tickets/insert-ticket/insert-ticket.component";
import {TicketService} from "../../services/ticket.service";

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
  deviceList : any;
  packageList : any;
  ticketData : any;


  //subscription_table boolean
  subscription_option: boolean = false;
  subscription_device : boolean = true;
  subscription_package : boolean = false;

  constructor(
    private route : ActivatedRoute,
    private as : AccountService,
    private dialog : MatDialog,
    private ts : TicketService
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
        this.packageList = res.packages;
        this.deviceList = res.devices;
        this.getTickets();
        this.loaded = true;
        //console.log(this.AccountObj);
      }
    })
  }

  getTickets(){
    this.ts.getTicketByAccount(this.AccountObj.account_code).toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        this.ticketData = res.data;
        console.log("Ticket Data ", this.ticketData);
      } else {
        console.log("error getting ticket Data");
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
  }

  subscriptionPackage(){
    this.subscription_device = false;
    this.subscription_package  = true;
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

  newTicket(){
    const newTicketConfig = new MatDialogConfig();
    newTicketConfig.autoFocus = true;
    newTicketConfig.width = "90%";
    newTicketConfig.data = this.AccountObj;
    this.dialog.open(InsertTicketComponent, newTicketConfig)
    .afterClosed()
    .subscribe(()=> this.ngOnInit());
  }

}
