import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatDialog, MatDialogModule, MatDialogConfig} from '@angular/material';
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray
} from '@angular/forms';
import { InsertDeviceComponent } from '../insert-device/insert-device.component';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  sortForm : FormGroup;
  searchForm : FormGroup;
  p : any;

  device_type = [
    {id: 0, name : "Phone", value:"phone"},
    {id: 1, name: "Router", value:"router"},
    {id: 2, name:"Modem", value:"modem"},
    {id: 3, name:"Wifi Extender", value : "wifi_extender"}
  ];

  constructor(
    private fb : FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.formInit();
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
    NewDeviceConfig.width = "40%";
    this.dialog.open(InsertDeviceComponent, NewDeviceConfig);
  }

}
