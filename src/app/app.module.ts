import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatGridTile,
  MatRadioModule,
  MatCheckbox,
  MatCheckboxModule,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { AccountViewComponent } from './accounts/account-view/account-view.component';
import { InsertTicketComponent } from './tickets/insert-ticket/insert-ticket.component';
import { TicketViewComponent } from './tickets/ticket-view/ticket-view.component';
import { InsertActionsComponent } from './tickets/insert-actions/insert-actions.component';
import { ActionViewComponent } from './tickets/action-view/action-view.component';
import { InsertAppointmentsComponent } from './tickets/insert-appointments/insert-appointments.component';
import { AppointmentsViewComponent } from './tickets/appointments-view/appointments-view.component';
import { CalenderViewComponent } from './tickets/calender-view/calender-view.component';
import { LoginComponent } from './auth/login/login.component';
import { ManageUserAuthComponent } from './auth/manage-user-auth/manage-user-auth.component';
import { AdminPanelComponent } from './auth/admin-panel/admin-panel.component';
import { InsertTechnicianComponent } from './technician/insert-technician/insert-technician.component';
import { ManageTechnicianComponent } from './technician/manage-technician/manage-technician.component';
import { InsertAccountsComponent } from './accounts/insert-accounts/insert-accounts.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { InsertDeviceComponent } from './device/insert-device/insert-device.component';
import { DeviceViewComponent } from './device/device-view/device-view.component';
import { InsertPackageComponent } from './package/insert-package/insert-package.component';
import { PackageViewComponent } from './package/package-view/package-view.component';
import { PackageListComponent } from './package/package-list/package-list.component';
import { DeviceListComponent } from './device/device-list/device-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    AccountListComponent,
    AccountViewComponent,
    InsertTicketComponent,
    TicketViewComponent,
    InsertActionsComponent,
    ActionViewComponent,
    InsertAppointmentsComponent,
    AppointmentsViewComponent,
    CalenderViewComponent,
    LoginComponent,
    ManageUserAuthComponent,
    AdminPanelComponent,
    InsertTechnicianComponent,
    ManageTechnicianComponent,
    InsertAccountsComponent,
    SignupComponent,
    ProfileComponent,
    InsertDeviceComponent,
    DeviceViewComponent,
    InsertPackageComponent,
    PackageViewComponent,
    PackageListComponent,
    DeviceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule,
    ScheduleModule, RecurrenceEditorModule,
    MatGridListModule,
    NgxPaginationModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
