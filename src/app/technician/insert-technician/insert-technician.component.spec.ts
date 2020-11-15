import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTechnicianComponent } from './insert-technician.component';

describe('InsertTechnicianComponent', () => {
  let component: InsertTechnicianComponent;
  let fixture: ComponentFixture<InsertTechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertTechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
