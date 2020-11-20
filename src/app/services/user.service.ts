import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSession : any;
  localUserSession : any;
  user_api = "http://localhost:3000";
  private _refresh = new Subject<void>();

  constructor(
    private http: HttpClient,
    private route: Router
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

  loginCheck(){
    return this.http.get<[]>(this.user_api+"/checksession/");
  }

  extend(obj){
    return this.http.post<[]>(this.user_api+"/extend", obj);
  }

  checkSession(){
    this.loginCheck().toPromise()
    .then((res:any)=>{
      if(res){
        //console.log(res);
      	
        localStorage.setItem("session", JSON.stringify(res));
        this.userSession = res;
        //console.log(this.userSession.session);
        this.route.navigate(["/"]);
        }
      
    })
  }


   validateSession(){
     var localData = localStorage.getItem("session");
     if(localData == null){
      console.log("Session is not found");
      this.route.navigate(["/login"]);
      return false;
     } else {
       var LocalSession = JSON.parse(localData);
       //console.log(LocalSession);
       var now = new Date();
        var expires = new Date(LocalSession.session.cookie.expires);
        if(expires > now){
         this.extend(LocalSession.user).subscribe((res:any)=>{
         if(res){
           //console.log(res);
           localStorage.removeItem("session");
           localStorage.setItem("session", JSON.stringify(res));
           this.userSession = res;
         }//console.log(this.userSession);
       })
         } else {
         this.route.navigate(["/login"]);
         }
        return true;
     }
   }

   newSession(){
     var status = this.validateSession();
     if(status){
       var localData = localStorage.getItem("session");
       var JsonLocalData = JSON.parse(localData);
     }

     return JsonLocalData;
   }
  
}
