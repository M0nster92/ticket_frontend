import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavComponent} from "./nav/nav.component";
import {InsertAccountsComponent} from "./accounts/insert-accounts/insert-accounts.component";
import {AccountListComponent} from "./accounts/account-list/account-list.component";

const routes: Routes = [
  {path : '', component: NavComponent,
  children:[
    {path : "newaccount", component:InsertAccountsComponent},
    {path : "accounts", component:AccountListComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
