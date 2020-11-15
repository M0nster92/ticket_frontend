import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserAuthComponent } from './manage-user-auth.component';

describe('ManageUserAuthComponent', () => {
  let component: ManageUserAuthComponent;
  let fixture: ComponentFixture<ManageUserAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
