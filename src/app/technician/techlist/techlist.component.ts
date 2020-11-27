import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatDialog, MatDialogModule, MatDialogConfig} from '@angular/material';
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray
} from '@angular/forms';
import { TechnicianService } from "../../services/technician.service";
import {InsertTechnicianComponent} from "../insert-technician/insert-technician.component";

@Component({
  selector: 'app-techlist',
  templateUrl: './techlist.component.html',
  styleUrls: ['./techlist.component.css']
})
export class TechlistComponent implements OnInit {

  sortForm : FormGroup;
  searchForm : FormGroup;
  p : any;
  techData : any;
  loaded : Boolean = false;
  searchResult = 0;

  constructor(
    private fb : FormBuilder,
    private dialog : MatDialog,
    private ts : TechnicianService
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getTechnicians();
  }

  formInit(){
    this.sortForm = this.fb.group({
      type : ['']
    })

    this.searchForm = this.fb.group({
      str : [""]
    })
  }

  getTechnicians(){
    this.ts.getAllTechnician().toPromise()
    .then((res:any)=>{
      if(res.status == "ok"){
        this.techData = res.data;
        console.log(this.techData);
        this.loaded = true;
        this.countResult();
      } else {
      }
    })
  }
  countResult(){
    if(this.techData){
      this.searchResult = this.techData.length;
    } else {
      this.searchResult = 0; 
    }
  }

  onSearchString(event:any){
    if(event.target.value.length > 1){
      console.log(event.target.value);
      this.techData = [];
      this.ts.getTechByStr(event.target.value).toPromise()
      .then((res:any)=>{
        if(res.status == "ok"){
          this.techData = res.data;
          this.countResult();
        }
      })
    } else {
      this.getTechnicians();
    }
  }

  newTechnician(){
    const newTech = new MatDialogConfig();
    newTech.autoFocus = true;
    newTech.width = "50%";
    this.dialog.open(InsertTechnicianComponent, newTech).afterClosed()
    .subscribe(()=> this.ngOnInit());
  }

}
