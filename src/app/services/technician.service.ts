import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  technician_api = "http://localhost:3000";

  constructor(
  	private http: HttpClient
  ) { }

  getAllTechnician(){
  	return this.http.get<[]>(this.technician_api+"/gettechnician");
  }

  newTechnician(techObj){
  	return this.http.get<[]>(this.technician_api+"/newtechnician", techObj);
  }

  updateTechnician(techId, techObj){
  	return this.http.get<[]>(this.technician_api+"/updatetechnician/"+techId, techObj);
  }
}
