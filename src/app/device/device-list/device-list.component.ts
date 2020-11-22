import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatDialog, MatDialogModule, MatDialogConfig} from '@angular/material';
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray
} from '@angular/forms';
import { InsertDeviceComponent } from '../insert-device/insert-device.component';
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  sortForm : FormGroup;
  searchForm : FormGroup;
  p : any;
  deviceData : any;

  device_type = [
    {id: 0, name : "Phone", value:"Phone"},
    {id: 1, name: "Router", value:"Router"},
    {id: 2, name:"Modem", value:"Modem"},
    {id: 3, name:"Wifi Extender", value : "WIFI Extender"}
  ];

  constructor(
    private fb : FormBuilder,
    private dialog: MatDialog,
    private ds : DeviceService
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getDevices();
  }

  getDevices(){
    this.ds.getAllDevices().toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        console.log(res.data);
        this.deviceData = res.data;
      } else {
        console.log("Data not found");
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

  newDevice(){
    const NewDeviceConfig = new MatDialogConfig();
    NewDeviceConfig.autoFocus = true;
    NewDeviceConfig.width = "60%";
    this.dialog.open(InsertDeviceComponent, NewDeviceConfig)
    .afterClosed()
    .subscribe(()=>this.ngOnInit());
  }

}
