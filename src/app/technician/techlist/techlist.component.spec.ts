import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechlistComponent } from './techlist.component';

describe('TechlistComponent', () => {
  let component: TechlistComponent;
  let fixture: ComponentFixture<TechlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
