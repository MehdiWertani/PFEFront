import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagneprepareComponent } from './campagneprepare.component';

describe('CampagneprepareComponent', () => {
  let component: CampagneprepareComponent;
  let fixture: ComponentFixture<CampagneprepareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampagneprepareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampagneprepareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
