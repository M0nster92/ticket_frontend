import { Component, OnInit, Inject } from '@angular/core';
import {DeviceService} from "../../services/device.service";
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray
} from '@angular/forms';
import {MatTableDataSource, MatDialog, MatDialogModule, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { isDaylightSavingTime } from '@syncfusion/ej2-angular-schedule';
import { AccountService } from "../../services/account.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subscribe-device',
  templateUrl: './subscribe-device.component.html',
  styleUrls: ['./subscribe-device.component.css']
})
export class SubscribeDeviceComponent implements OnInit {

  deviceData : any ;
  p : any;
  loaded : Boolean = false;
  deviceCount = 0;
  sortForm : FormGroup;
  device_type = [
    {id: 0, name : "Phone", value:"Phone"},
    {id: 1, name: "Router", value:"Router"},
    {id: 2, name:"Modem", value:"Modem"},
    {id: 3, name:"Wifi Extender", value : "WIFI Extender"}
  ];
  accountData : any;

  constructor(
    private ds : DeviceService,
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data,
    private matdialogRef : MatDialogRef<SubscribeDeviceComponent>,
    private as : AccountService
  ) { 
    this.accountData = data;

    console.log(this.accountData);
  }

  ngOnInit(): void {
    this.getDevices();
    this.formInit();
  }

  formInit(){
    this.sortForm = this.fb.group({
      type : ['']
    })
  }

  getDevices(){
    this.ds.getAllDevices().toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        this.deviceData = res.data;
        
        this.loaded = true;
      } else {
        console.log("Data not found");
      }
    })
  }

  onChangeType(){

  }

  submit(val){
    let subscribeObj = {
      device_name : val.name,
      device_id : val.device_id,
      price : val.price,
      status : true,
      start_date : new Date().toISOString(),
      account_code : this.accountData.account_code,
      first_name : this.accountData.first_name,
      last_name : this.accountData.last_name,
      device_type : val.type
    }
    this.as.subscribeDevice(subscribeObj).toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        Swal.fire("","Device Assigned", "success");
      } else {
        Swal.fire("", "Failed! Try Again", "error");
      }
    })
  }

  close(){
    this.matdialogRef.close();
  }

}
