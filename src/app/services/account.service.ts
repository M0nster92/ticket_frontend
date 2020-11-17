import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit {

  account_api = "http://localhost:3000";
  private _refresh = new Subject<void>();

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(){
  }

  get refresh() {
    return this._refresh;
  }

  getAllAccounts(){
    return this.http.get<[]>(this.account_api+'/getaccount/');
  }

  newAccount(obj){
    return this.http.post<[]>(this.account_api+"/newaccount/",obj);
  }

  searchAccount(val){
    return this.http.get<[]>(this.account_api+"/searchaccount/"+val);
  }

  getAccountByTypes(val){
    return this.http.get<[]>(this.account_api+"/getaccount/?account_type="+val);
  }

  getAccount(val){
    return this.http.get<[]>(this.account_api+"/getaccount/"+val);
  }

}
