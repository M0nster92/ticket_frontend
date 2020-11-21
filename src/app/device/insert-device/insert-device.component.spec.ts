import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDeviceComponent } from './insert-device.component';

describe('InsertDeviceComponent', () => {
  let component: InsertDeviceComponent;
  let fixture: ComponentFixture<InsertDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
