import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { HeaderRenderer } from '@syncfusion/ej2-angular-schedule';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  device_api = "http://localhost:3000";
  private _refresh = new Subject<void>();

  constructor(
    private http: HttpClient
  ) { }

  get refresh() {
    return this._refresh;
  }

  getAllDevices(){
    return this.http.get<[]>(this.device_api+'/getdevices');
  }

  getDevice(id){
    return this.http.get<[]>(this.device_api+"/getdevice/"+id);
  }

  getDeviceByType(type){
    return this.http.get<[]>(this.device_api+"/getdevices/?type="+type);
  }

  getDeviceByStr(str){
    return this.http.get<[]>(this.device_api+"/searchdevice/"+str);
  }

  postDevice(obj){
    return this.http.post<[]>(this.device_api+"/newdevice/", obj)
    .pipe(
      tap(() => {
        this._refresh.next();
      })
    )
  }

  updateDevice(id, obj){
    return this.http.post<[]>(this.device_api+"/updatedevice/"+id, obj)
    .pipe(
      tap(() => {
        this._refresh.next();
      })
    )
  }

}
