import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeDeviceComponent } from './subscribe-device.component';

describe('SubscribeDeviceComponent', () => {
  let component: SubscribeDeviceComponent;
  let fixture: ComponentFixture<SubscribeDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
