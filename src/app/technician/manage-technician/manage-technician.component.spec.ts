import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTechnicianComponent } from './manage-technician.component';

describe('ManageTechnicianComponent', () => {
  let component: ManageTechnicianComponent;
  let fixture: ComponentFixture<ManageTechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
