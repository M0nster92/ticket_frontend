import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import {TicketService} from "../../services/ticket.service";
import Swal from "sweetalert2";  
import {MatTableDataSource, MatDialog, MatDialogModule, MatDialogConfig}
from "@angular/material";
import {TechnicianService} from 'src/app/services/technician.service';
import {UserService} from 'src/app/services/user.service';
import {AccountService} from 'src/app/services/account.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {

  ticketData : any;
  sessionData : any;
  accountData : any;
  technicianList : any;
  ticketID : any;
  ticketForm : FormGroup;

  issue_list = [
    {id:0, name:"Service Down", value:'servicedown'},
    {id:1, name:"Phone", value:'phone'},
    {id:2, name:"Channel Problem", value:'channelproblem'},
    {id:3, name:"Troubleshoot", value :"troubleshoot"}
  ]

  priority_list = [
    {id:0, value:'normal', name:'Normal'},
     {id:1, value:'urgent', name:'Urgent'}
  ]


  constructor(
    private ts : TicketService,
    private tech : TechnicianService,
    private us : UserService,
    private as : AccountService,
    private router : Router,
    private route : ActivatedRoute,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getTicket();
  }

  getTechnician(){
    this.tech.getAllTechnician().toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        this.technicianList = res.data;
        console.log("Technician list ", this.technicianList);
      } else {
        console.log("Technician list not found");
      }
    })
  }

  getTicket(){
    this.ticketID = this.route.snapshot.paramMap.get("id");
    console.log("Selected ticket ",this.ticketID);
    this.ts.getSelectedTicket(this.ticketID).toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        console.log(res);
        this.ticketData = res.data;
        console.log("Ticket Info ", this.ticketData);
      } else {
        console.log("error fetching ticketData");
      }
    })

  }



  formInit(){
    this.ticketForm = this.fb.group({
      category : [""],
      issue : [""],
      subject : [""],
      resolution : [""],
      status : [""],
      assigned_user : [""],
      created_user : [""],
      notes : [""],
      priority : [""]
    })
  }

  populateForm(val){
    console.log(val);
  }
}
