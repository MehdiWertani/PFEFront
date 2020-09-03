import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIterationDetailsComponent } from './test-iteration-details.component';

describe('TestIterationDetailsComponent', () => {
  let component: TestIterationDetailsComponent;
  let fixture: ComponentFixture<TestIterationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIterationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIterationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
