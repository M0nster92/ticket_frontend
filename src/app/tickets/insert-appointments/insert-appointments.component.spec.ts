import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAppointmentsComponent } from './insert-appointments.component';

describe('InsertAppointmentsComponent', () => {
  let component: InsertAppointmentsComponent;
  let fixture: ComponentFixture<InsertAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
