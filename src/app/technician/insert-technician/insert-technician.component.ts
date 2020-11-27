import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator,Validators, FormArray, Form} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import Swal from 'sweetalert2';
import {TechnicianService} from "../../services/technician.service";

@Component({
  selector: 'app-insert-technician',
  templateUrl: './insert-technician.component.html',
  styleUrls: ['./insert-technician.component.css']
})
export class InsertTechnicianComponent implements OnInit {

  techForm : FormGroup;
  category = [
    {id:0, name:"Phone", value:"phone"},
    {id:1, name:"Customer Service", value : "customerservice"},
    {id:2, name:"Tech Visit", value : "techvisit"},
    {id:3, name:"Installation", value: "installation"}
  ]

  constructor(
    private fb : FormBuilder,
    private dialogRef : MatDialogRef<InsertTechnicianComponent>,
    private ts : TechnicianService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.techForm = this.fb.group({
      user:[""],
      display_name : [""],
      fieldService : [false],
      lab : [false],
      phonesupport : [false],
      category : [],
      extension : [""]
    })
  }

  submit(){
    if(this.techForm.valid){
      this.ts.newTechnician(this.techForm.getRawValue()).toPromise()
      .then((res:any)=>{
        if(res.status == "ok"){
          Swal.fire("", "Technician Inserted", "success");
          this.dialogRef.close();
        } else {
          Swal.fire("", "Failed! Try Again", "error");
        }
      })
    }
  }

  close(){
    this.dialogRef.close();
  }

}
