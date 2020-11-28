import { Component, OnInit } from '@angular/core';
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray, Form
} from '@angular/forms';
import swal from 'sweetalert2';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-insert-device',
  templateUrl: './insert-device.component.html',
  styleUrls: ['./insert-device.component.css']
})
export class InsertDeviceComponent implements OnInit {

  deviceForm : FormGroup;
  device_type = [
    {id: 0, name : "Phone", value:"phone"},
    {id: 1, name: "Router", value:"router"},
    {id: 2, name:"Modem", value:"modem"},
    {id: 3, name:"Wifi Extender", value : "wifi_extender"}
  ]

  constructor(
    private fb: FormBuilder,
    public dialogRef : MatDialogRef<InsertDeviceComponent>,
    private ds : DeviceService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.deviceForm = this.fb.group({
      serial : [""],
      model : [""],
      mac: [""],
      name : [""],
      type :[""],
      price : [null]
    })
  }

  submit(){
    if(this.deviceForm.valid){
      this.ds.postDevice(this.deviceForm.getRawValue()).toPromise()
      .then((res:any)=>{
        if(res.status == "ok"){
          swal.fire("","Device Inserted", "success");
          this.dialogRef.close();
        } else {
          swal.fire("", "Failed! Try Again", "error");
        }
      })
    }
  }

  close(){
    this.dialogRef.close();
  }

}
