import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userSession : any;
  constructor(
    private as: AccountService,
    private us: UserService
  ) {
    
   }

  ngOnInit(): void {
    /*this.us.checkSession();
    var localData = localStorage.getItem("session");
    this.userSession = JSON.parse(localData);
    console.log(this.userSession); */
    this.us.validateSession();
    }

}
