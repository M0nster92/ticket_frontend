import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAccountsComponent } from './insert-accounts.component';

describe('InsertAccountsComponent', () => {
  let component: InsertAccountsComponent;
  let fixture: ComponentFixture<InsertAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
