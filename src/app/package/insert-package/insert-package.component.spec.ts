import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPackageComponent } from './insert-package.component';

describe('InsertPackageComponent', () => {
  let component: InsertPackageComponent;
  let fixture: ComponentFixture<InsertPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
