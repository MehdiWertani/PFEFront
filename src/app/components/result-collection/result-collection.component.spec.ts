import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCollectionComponent } from './result-collection.component';

describe('ResultCollectionComponent', () => {
  let component: ResultCollectionComponent;
  let fixture: ComponentFixture<ResultCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
