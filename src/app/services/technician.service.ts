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
  	return this.http.get<[]>(this.technician_api+"/gettechnicians");
  }

  newTechnician(techObj){
    console.log("new technician object ", techObj);
  	return this.http.post<[]>(this.technician_api+"/newtechnician", techObj);
  }

  updateTechnician(techId, techObj){
  	return this.http.get<[]>(this.technician_api+"/updatetechnician/"+techId, techObj);
  }

  getTechByCategory(type){
    return this.http.get<[]>(this.technician_api+"/gettechnicians/?category="+type);
  }

  getTechByStr(str){
    return this.http.get<[]>(this.technician_api+"/searchtechnician/"+str);
  }
}
