import { Component, OnInit } from '@angular/core';
import { TicketService } from "../../services/ticket.service";
import { FormBuilder, FormControl, FormGroup, Validators, Validator, FormArray}
from "@angular/forms";

@Component({
  selector: 'app-all-ticket',
  templateUrl: './all-ticket.component.html',
  styleUrls: ['./all-ticket.component.css']
})
export class AllTicketComponent implements OnInit {

	ticketData : any;
	sortForm : FormGroup;
	loaded : Boolean = false;
	ticketCount : any;

	issue_list = [
    {id:0, name:"Service Down", value:'servicedown'},
    {id:1, name:"Phone", value:'phone'},
    {id:2, name:"Channel Problem", value:'channelproblem'},
    {id:3, name:"Troubleshoot", value :"troubleshoot"}
  ]

  constructor(
  	private ts : TicketService,
  	private fb : FormBuilder
  	) { }

  ngOnInit(): void {
  	this.formInit();
  	this.getTicket();
  }

  formInit(){
  	this.sortForm = this.fb.group({
  		type : [""]
  	})
  }

  getTicket(){
  	this.ts.getAllTickets().toPromise()
  	.then((res:any)=>{
  		if(res.status == "ok"){
  			this.ticketData = res.data;
  			this.loaded = true;
  			this.countTicket();
  			console.log(this.ticketData);
  		} else {
  			this.loaded = false;
  			this.countTicket();
  		}
  	})
  }

  countTicket(){
    if(this.ticketData){
      this.ticketCount = this.ticketData.length;
    } else {
      this.ticketCount = 0;
    }
  }

  onChangeType(){
  	if(this.sortForm.controls["type"].value != ""){
  		this.ticketData = [];
  		this.ts.getTicketByIssue(this.sortForm.controls["type"].value).toPromise()
  		.then((res:any)=>{
  			if(res.status == "ok"){
  				this.ticketData = res.data;
  				this.loaded = true;
  				this.countTicket();
  			} else {
  				console.log("Problem fetching Data");
  				this.loaded = false;
  				this.countTicket();
  			}
  		})
  	} else {
  		this.getTicket();
  	}
  }

}
