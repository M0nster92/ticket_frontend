import { Component, OnInit, Inject } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {FormGroup, FormControl, FormBuilder, Validator, FormArray} from "@angular/forms";
import Swal from "sweetalert2";
import 
{MatTableDataSource, MatDialog, MatDialogModule, MatDialogConfig, 
MAT_DIALOG_DATA,MatDialogRef } from "@angular/material";
import {UserService} from "../../services/user.service";
import {TechnicianService} from "../../services/technician.service";
 
@Component({
  selector: 'app-insert-ticket',
  templateUrl: './insert-ticket.component.html',
  styleUrls: ['./insert-ticket.component.css']
})
export class InsertTicketComponent implements OnInit {

  accountData : any;
  ticketForm : FormGroup;
  sessionData : any;
  technicianList : any;

  issues : [
	  {id:0, name : "Service Down", value:"servicedown"},
	  {id:1, name : "Phone", value : "phone"},
	  {id:2, name: "Channel Problem", value : "channelproblem"},
	  {id:3, name : "Troubleshoot", value :"troubleshoot"}
  ]

  
 
  constructor(
  	private fb : FormBuilder,
  	private as : AccountService,
  	private matDialogRef : MatDialogRef <InsertTicketComponent>,
	  @Inject (MAT_DIALOG_DATA) data,
	  private us : UserService,
	  private tech : TechnicianService
  ) {
  	this.accountData = data;

  	console.log(this.accountData);
   }

  ngOnInit(): void {
	  this.formInit();
	  this.sessionData = this.us.newSession();
	  console.log(this.sessionData);
	  this.getTechnicians();
  }

  formInit(){
  	this.ticketForm = this.fb.group({
  		category : [""],
  		issue : [""],
  		subject : [""],
  		resolution : [""],
  		status : ["open"],
  		assigned_user : [""],
  		created_user : [""],
		notes : [""],
		priority : [""]  
  	})
  }
  getTechnicians(){
    this.tech.getAllTechnician().toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        this.technicianList = res.data;
        console.log(this.technicianList);
      } else {

      }
    })
  }

  submit(){
	  if(this.ticketForm.valid){
		  let ticketObj = {
			  account_code : this.accountData.account_code,
			  first_name : this.accountData.first_name,
			  last_name: this.accountData.last_name,
			  priority: this.ticketForm.controls["priority"].value ,
			  status : this.ticketForm.controls["status"].value,
			  assigned_user : this.ticketForm.controls["assigned_user"].value,
			  assigned_date : new Date().toISOString(),
			  created_user : this.sessionData.user.user_name,
			  created_date : new Date().toISOString(),
			  notes : this.ticketForm.controls["notes"].value
		  }

		  console.log(ticketObj);
	  }
  }

}
