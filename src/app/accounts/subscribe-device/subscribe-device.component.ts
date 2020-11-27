import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../../services/device.service";
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray
} from '@angular/forms';

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

  constructor(
    private ds : DeviceService,
    private fb : FormBuilder
  ) { }

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

  submit(){
    
  }

}
