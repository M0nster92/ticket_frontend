import { Component, OnInit } from '@angular/core';
import {
  FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray
  } from '@angular/forms';
import {PackageService} from "../../services/package.service";
import {MatTableDataSource, MatDialog, MatDialogModule, MatDialogConfig} from '@angular/material';
import {InsertPackageComponent} from "../insert-package/insert-package.component";

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  sortForm : FormGroup;
  searchForm: FormGroup;
  package_type = [
    {id: 0, name : "Internet", value:"Internet"},
    {id: 1, name: "TV", value:"TV"},
    {id: 2, name:"Phone", value:"Phone"}
  ];

  constructor(
    private fb: FormBuilder,
    private ps : PackageService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getPackages();
  }

  getPackages(){
    this.ps.getAllPackages().toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        console.log(res.data);
      } else {
        console.log(res);
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

  }

  countPackage(){

  }

  onSearchString(){

  }

  newPackage(){
    const NewPackageConfig = new MatDialogConfig();
    NewPackageConfig.autoFocus = true;
    NewPackageConfig.width = "60%";
    this.dialog.open(InsertPackageComponent, NewPackageConfig)
    .afterClosed()
    .subscribe(()=> this.ngOnInit());
  }

}
