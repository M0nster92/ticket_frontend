import { Component, OnInit } from '@angular/core';
import { TicketService } from "../../services/ticket.service";
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} 
from "@angular/forms";
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-my-ticket',
  templateUrl: './my-ticket.component.html',
  styleUrls: ['./my-ticket.component.css']
})
export class MyTicketComponent implements OnInit {

	ticketData : any;
	ticketCount : any;
	sortForm : FormGroup;
	sessionData : any;
	loaded : Boolean = false;

	issue_list = [
    {id:0, name:"Service Down", value:'servicedown'},
    {id:1, name:"Phone", value:'phone'},
    {id:2, name:"Channel Problem", value:'channelproblem'},
    {id:3, name:"Troubleshoot", value :"troubleshoot"}
  ]



  constructor(
  	private ts: TicketService,
  	private fb : FormBuilder,
  	private us : UserService
  	) { }

  ngOnInit(): void {
  	this.sessionData = this.us.newSession();
  	console.log(this.sessionData);
  	this.getTicket();
  }


  getTicket(){
  	this.ts.getTicketByAssign(this.sessionData.user.user_name).toPromise()
  	.then((res:any)=>{
  		if(res.status == "ok"){
  			this.ticketData = res.data;
  			this.loaded = true;
  		} else {
  			console.log("error fetching data");
  			this.loaded = false;
  		}
  	})
  }


}
