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
  p : any;
  loaded: Boolean = false;
  packageCount = 0;
  packageData : any;

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
      this.packageData = res.data;
      this.loaded = true;
      console.log(this.packageData);
      this.countPackage();
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
	  if(this.sortForm.controls["type"].value != ""){
      this.packageData = [];
		  this.ps.getPackageByType(this.sortForm.controls["type"].value).toPromise()
		  .then((res:any)=>{
			  if(res.status == "ok"){
				  this.packageData = res.data;
				  this.loaded = true;
				  this.countPackage();
			  } else {
				  console.log(res);
				  this.loaded = false;
				  this.countPackage();
			  }
		  })
	  } else {
		  this.getPackages();
	  }
  }

  countPackage(){
	  if(this.packageData){
		  this.packageCount = this.packageData.length;
	  } else {
      this.packageCount = 0;
    }
  }

  onSearchString(event){
    if(event.target.value.length > 1 ){
      console.log(event.target.value);
      this.packageData = [];
      this.ps.getPackageByString(event.target.value).toPromise()
      .then((res:any)=>{
        if(res.status == "ok"){
          this.packageData = res.data;
          this.countPackage();
        }
      })
    } else {
      this.getPackages();
    }
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
