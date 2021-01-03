import {Component, OnInit} from '@angular/core';
import {RunCampagneService} from '../../_services/run-campagne.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  campaigns: Array<any>;

  constructor(private campaignService: RunCampagneService) {
  }

  ngOnInit(): void {
    this.campaignService.getAllCampaigns().subscribe(data => {
      this.campaigns = data;
    });
  }

  deleteCampaign(id: any) {
    this.campaignService.deleteCampaign(id).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
  }
}
