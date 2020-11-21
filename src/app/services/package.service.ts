import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  package_api = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ) { }

  getAllPackages(){
    return this.http.get<[]>(this.package_api+"/getpackages");
  }

  getPackage(id){
    return this.http.get<[]>(this.package_api+"/getpackage/", id);
  }

  newPackage(obj){
    return this.http.post<[]>(this.package_api+"/newpackage/", obj);
  }

  updatePackage(id, obj){
    return this.http.post<[]>(this.package_api+"/updatepackage/"+id, obj);
  }
}
