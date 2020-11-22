import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTicketComponent } from './monthly-ticket.component';

describe('MonthlyTicketComponent', () => {
  let component: MonthlyTicketComponent;
  let fixture: ComponentFixture<MonthlyTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
