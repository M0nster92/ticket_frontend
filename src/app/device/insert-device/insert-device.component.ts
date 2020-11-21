import { Component, OnInit } from '@angular/core';
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray, Form
} from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-insert-device',
  templateUrl: './insert-device.component.html',
  styleUrls: ['./insert-device.component.css']
})
export class InsertDeviceComponent implements OnInit {

  deviceForm : FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  formInit(){
    this.deviceForm = this.fb.group({
      serial : [""],
      model : [""],
      mac: [""],
      name : [""]
    })
  }

}
