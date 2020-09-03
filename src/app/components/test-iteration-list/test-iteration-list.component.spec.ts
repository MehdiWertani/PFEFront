import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIterationListComponent } from './test-iteration-list.component';

describe('TestIterationListComponent', () => {
  let component: TestIterationListComponent;
  let fixture: ComponentFixture<TestIterationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIterationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIterationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
