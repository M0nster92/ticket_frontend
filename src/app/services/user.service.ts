import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user_api = "http://localhost:3000";
  private _refresh = new Subject<void>();

  constructor(
    private http: HttpClient
  ) { }

  get refresh() {
    return this._refresh;
  }

  newUser(userObj){
    return this.http.post<[]>(this.user_api+"/newuser", userObj);
  }

  getUsers(){
    return this.http.get<[]>(this.user_api+"/users");
  }

  login(userObj){
    return this.http.post<[]>(this.user_api+"/login", userObj,{
      observe:"body",
      withCredentials: true
    })
  }
}
