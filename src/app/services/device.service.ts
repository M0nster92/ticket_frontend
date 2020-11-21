import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { HeaderRenderer } from '@syncfusion/ej2-angular-schedule';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  device_api = "http://localhost:3000";

  constructor(
    private http: HttpClient
  ) { }

  getAllDevices(){
    return this.http.get<[]>(this.device_api+'/getdevices');
  }

  getDevice(id){
    return this.http.get<[]>(this.device_api+"/getdevice/"+id);
  }

  postDevice(obj){
    return this.http.post<[]>(this.device_api+"/newdevice/", obj);
  }

  updateDevice(id, obj){
    return this.http.post<[]>(this.device_api+"/updatedevice/"+id, obj);
  }

}
