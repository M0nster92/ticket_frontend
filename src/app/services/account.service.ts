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

}
