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
  loaded: Boolean = false;
  deviceCount = 0;

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
        this.loaded = true;
        this.countDevice();
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

  onChangeType(){
    if(this.sortForm.controls["type"].value != ""){
      this.ds.getDeviceByType(this.sortForm.controls["type"].value).toPromise()
      .then((res:any)=>{
        if(res.status == "ok"){
          this.deviceData = res.data;
          this.loaded = true;
          this.countDevice();
        } else {
          console.log(res);
          this.loaded = false;
          this.countDevice();
          //this.getDevices();
          //this.countDevice();
        }
      })
    } else {
      this.getDevices();
    }
  }

  countDevice(){
    if(this.deviceData){
      this.deviceCount = this.deviceData.length;
    } else {
      this.deviceCount = 0;
    }
  }

  onSearchString(event: any){
    if(event.target.value.length > 2 ){
      console.log(event.target.value);
      this.deviceData = [];
      this.ds.getDeviceByStr(event.target.value).toPromise()
      .then((res:any)=>{
        if(res.status == "ok"){
          this.deviceData = res.data;
          this.countDevice();
        }
      })
    } else {
      this.getDevices();
    }
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
