import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertActionsComponent } from './insert-actions.component';

describe('InsertActionsComponent', () => {
  let component: InsertActionsComponent;
  let fixture: ComponentFixture<InsertActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
