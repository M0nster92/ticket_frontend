import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  ticket_api = "http://localhost:3000";

  constructor(
  	private http:HttpClient
  ) { }

  getAllTickets(){
  	return this.http.get<[]>(this.ticket_api+"/getticket");
  }

  newTicket(ticketObj){
  	return this.http.post<[]>(this.ticket_api+"/newticket", ticketObj);
  }

  updateTicket(ticketId, ticketObj){
  	return this.http.post<[]>(this.ticket_api+"/updateticket/"+ticketId, ticketObj);
  }
  
}
