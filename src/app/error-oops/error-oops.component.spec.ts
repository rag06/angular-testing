import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorOopsComponent } from './error-oops.component';

describe('ErrorOopsComponent', () => {
  let component: ErrorOopsComponent;
  let fixture: ComponentFixture<ErrorOopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorOopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorOopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
