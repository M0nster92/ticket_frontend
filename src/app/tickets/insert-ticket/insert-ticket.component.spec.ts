import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTicketComponent } from './insert-ticket.component';

describe('InsertTicketComponent', () => {
  let component: InsertTicketComponent;
  let fixture: ComponentFixture<InsertTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
