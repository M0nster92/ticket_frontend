import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePackageComponent } from './subscribe-package.component';

describe('SubscribePackageComponent', () => {
  let component: SubscribePackageComponent;
  let fixture: ComponentFixture<SubscribePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribePackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
