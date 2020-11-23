import { Component, OnInit } from '@angular/core';
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray, Form
} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import Swal from 'sweetalert2';
import {PackageService} from "../../services/package.service";

@Component({
  selector: 'app-insert-package',
  templateUrl: './insert-package.component.html',
  styleUrls: ['./insert-package.component.css']
})
export class InsertPackageComponent implements OnInit {

  packageForm : FormGroup;

  package_type = [
    {id: 0, name : "Internet", value:"Internet"},
    {id: 1, name: "TV", value:"TV"},
    {id: 2, name:"Phone", value:"Phone"}
  ];

  constructor(
    private fb : FormBuilder,
    private dialogRef : MatDialogRef<InsertPackageComponent>,
    private ps: PackageService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.packageForm = this.fb.group({
      category : [""],
      price : [null],
      name : [""]
    })
  }

  submit(){
    if(this.packageForm.valid){
      this.ps.newPackage(this.packageForm.getRawValue()).toPromise()
      .then((res:any)=>{
        if(res.status == "ok"){
          Swal.fire("", "Package Inserted","success");
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
