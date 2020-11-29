import { Component, Inject, OnInit } from '@angular/core';
import {DeviceService} from "../../services/device.service";
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray
} from '@angular/forms';
import {MatTableDataSource, MatDialog, MatDialogModule, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import Swal from 'sweetalert2';
import { AccountService } from "../../services/account.service";
import { PackageService } from "../../services/package.service";

@Component({
  selector: 'app-subscribe-package',
  templateUrl: './subscribe-package.component.html',
  styleUrls: ['./subscribe-package.component.css']
})
export class SubscribePackageComponent implements OnInit {

  packageData : any ;
  p : any;
  loaded : Boolean = false;
  sortForm : FormGroup;
  accountData : any;
  package_type = [
    {id: 0, name : "Internet", value:"Internet"},
    {id: 1, name: "TV", value:"TV"},
    {id: 2, name:"Phone", value:"Phone"}
  ];

  constructor(
    private ds : DeviceService,
    private fb : FormBuilder,
    @Inject (MAT_DIALOG_DATA) data,
    private matdialogRef : MatDialogRef<SubscribePackageComponent>,
    private as : AccountService,
    private ps : PackageService
  ) {
    this.accountData = data;
    console.log(this.accountData);
   }

  ngOnInit(): void {
    this.formInit();
    this.getPackages();
  }

  formInit(){
    this.sortForm = this.fb.group({
      type : ['']
    })
  }

  getPackages(){
    this.ps.getAllPackages().toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        this.packageData = res.data;
        this.loaded = true;
        console.log(this.packageData);
      } else {
        console.log("Data not found");
      }
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
				} else {
					this.loaded = false;
				}
			})
		} else {
			this.getPackages();
		}
  }

  close(){
    this.matdialogRef.close();
  }

	submit(val){
		let subscribeObj = {
			package_name : val.name,
			package_code : val.package_id,
			account_code : this.accountData.account_code,
			price : val.price,
			active : true,
			start_date : new Date().toISOString()
		}

		this.as.subscribeProduct(subscribeObj).toPromise()
		.then((res:any)=>{
			if(res.status == "ok"){
				val.customer_count++;
				console.log(val.customer_number);
				this.ps.updatePackage(val.package_id, val).toPromise()
				.then((res:any) => {
					if(res.status == "ok"){
						Swal.fire("", "Package Assigned", "success");
						this.matdialogRef.close();
					} else {
						Swal.fire("", "Failed! Try again", "error");
					}
				})

			} else {

			}
		})
	}


}
