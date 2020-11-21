import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavComponent} from "./nav/nav.component";
import {InsertAccountsComponent} from "./accounts/insert-accounts/insert-accounts.component";
import {AccountListComponent} from "./accounts/account-list/account-list.component";
import {AccountViewComponent} from "./accounts/account-view/account-view.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent } from "./auth/signup/signup.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsertDeviceComponent } from './device/insert-device/insert-device.component';
import { DeviceViewComponent } from './device/device-view/device-view.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { InsertPackageComponent } from './package/insert-package/insert-package.component';
import { PackageViewComponent } from './package/package-view/package-view.component';
import { PackageListComponent } from './package/package-list/package-list.component';

const routes: Routes = [
  {path : '', component: NavComponent,
  children:[
    {path : '', component:DashboardComponent},
    {path : "newaccount", component:InsertAccountsComponent},
    {path : "accounts", component:AccountListComponent},
    {path : "account/:id", component: AccountViewComponent},
    {path : "insertdevice", component:InsertDeviceComponent},
    {path : "viewdevice/:id", component: DeviceViewComponent},
    {path : "devicelist", component: DeviceListComponent},
    {path : "insertpackage", component:InsertPackageComponent},
    {path : "viewpackage/:id", component: PackageViewComponent},
    {path : "packagelist", component: PackageListComponent}
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
