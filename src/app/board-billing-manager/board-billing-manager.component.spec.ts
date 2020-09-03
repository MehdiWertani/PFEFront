import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardBillingManagerComponent } from './board-billing-manager.component';

describe('BoardBillingManagerComponent', () => {
  let component: BoardBillingManagerComponent;
  let fixture: ComponentFixture<BoardBillingManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardBillingManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardBillingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
