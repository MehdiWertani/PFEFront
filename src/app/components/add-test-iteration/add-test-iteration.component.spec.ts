import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestIterationComponent } from './add-test-iteration.component';

describe('AddTestIterationComponent', () => {
  let component: AddTestIterationComponent;
  let fixture: ComponentFixture<AddTestIterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestIterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestIterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
