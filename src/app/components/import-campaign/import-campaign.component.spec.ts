import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCampaignComponent } from './import-campaign.component';

describe('ImportCampaignComponent', () => {
  let component: ImportCampaignComponent;
  let fixture: ComponentFixture<ImportCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
