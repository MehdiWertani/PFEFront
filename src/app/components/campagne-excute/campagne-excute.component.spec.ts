import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagneExcuteComponent } from './campagne-excute.component';

describe('CampagneExcuteComponent', () => {
  let component: CampagneExcuteComponent;
  let fixture: ComponentFixture<CampagneExcuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampagneExcuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampagneExcuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
