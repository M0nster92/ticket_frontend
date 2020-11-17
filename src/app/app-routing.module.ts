import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavComponent} from "./nav/nav.component";
import {InsertAccountsComponent} from "./accounts/insert-accounts/insert-accounts.component";
import {AccountListComponent} from "./accounts/account-list/account-list.component";
import {AccountViewComponent} from "./accounts/account-view/account-view.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent } from "./auth/signup/signup.component";

const routes: Routes = [
  {path : '', component: NavComponent,
  children:[
    {path : "newaccount", component:InsertAccountsComponent},
    {path : "accounts", component:AccountListComponent},
    {path : "account/:id", component: AccountViewComponent},
  ]
},
{path : "login", component:LoginComponent},
{path : "signup", component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
