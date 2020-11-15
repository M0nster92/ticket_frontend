import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsViewComponent } from './appointments-view.component';

describe('AppointmentsViewComponent', () => {
  let component: AppointmentsViewComponent;
  let fixture: ComponentFixture<AppointmentsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
