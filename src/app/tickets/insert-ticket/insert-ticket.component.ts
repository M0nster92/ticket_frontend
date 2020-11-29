import { Component, OnInit, Inject } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {FormGroup, FormControl, FormBuilder, Validator, FormArray} from "@angular/forms";
import Swal from "sweetalert2";
import 
{MatTableDataSource, MatDialog, MatDialogModule, MatDialogConfig, 
MAT_DIALOG_DATA,MatDialogRef } from "@angular/material";
 
@Component({
  selector: 'app-insert-ticket',
  templateUrl: './insert-ticket.component.html',
  styleUrls: ['./insert-ticket.component.css']
})
export class InsertTicketComponent implements OnInit {

  accountData : any;
  ticketForm : FormGroup;
 
  constructor(
  	private fb : FormBuilder,
  	private as : AccountService,
  	private matDialogRef : MatDialogRef <InsertTicketComponent>,
  	@Inject (MAT_DIALOG_DATA) data
  ) {
  	this.accountData = data;

  	console.log(this.accountData);
   }

  ngOnInit(): void {
  	this.formInit();
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
  		notes : [""]
  	})
  }

  submit(){
  
  }

}
