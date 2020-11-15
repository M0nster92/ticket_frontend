import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }

  account_types = [
    {id:0, name: "Residential", value:"Residential"},
    {id:1, name:"Business", value:"Business"}
  ]

  getAccountTypes(){
    return this.account_types;
  }
}
