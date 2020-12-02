import { Component, OnInit } from '@angular/core';
import { TicketService } from "../../services/ticket.service";
import { FormBuilder, FormGroup, FormControl, Validator, Validators, FormArray}
from "@angular/forms";

@Component({
  selector: 'app-monthly-ticket',
  templateUrl: './monthly-ticket.component.html',
  styleUrls: ['./monthly-ticket.component.css']
})
export class MonthlyTicketComponent implements OnInit {

	sortForm : FormGroup;
	ticketCount: any;
	ticketData : any;
	Days : number = 30;
	loaded : Boolean = false;

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

  getTicket(){
  	this.ts.getRecentTicket().toPromise()
  	.then((res:any)=>{
  		if(res.status == "ok"){
  			this.ticketData = res.data;
  			this.loaded = true;
  			this.countTicket();
  			console.log(this.ticketData);
  		} else {
  			this.loaded = false;
  			this.countTicket();
  			console.log(res);
  		}
  	})
  }

  formInit(){
  	this.sortForm = this.fb.group({
  		type : [""]
  	})
  }

  onChangeType(){
  	if(this.sortForm.controls["type"].value != ""){
  		this.ts.getRecentTicketByIssue(this.sortForm.controls["type"].value).toPromise()
  		.then((res:any)=>{
  			if(res.status == "ok"){
  				console.log(res.data);
  				this.ticketData = res.data;
  				this.loaded = true;
  				this.countTicket();
  			} else {
  				this.loaded = false;
  				this.countTicket();
  				console.log(res);
  			}
  		})
  	} else {
  		this.getTicket();
  	}
  }

  countTicket(){
    if(this.ticketData){
      this.ticketCount = this.ticketData.length;
    } else {
      this.ticketCount = 0;
    }
  }

}
