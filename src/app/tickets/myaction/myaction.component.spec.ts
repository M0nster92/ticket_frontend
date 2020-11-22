import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyactionComponent } from './myaction.component';

describe('MyactionComponent', () => {
  let component: MyactionComponent;
  let fixture: ComponentFixture<MyactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
