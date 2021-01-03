import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardBillingManagerComponent} from './board-billing-manager.component';
import {AddTestIterationComponent} from '../components/add-test-iteration/add-test-iteration.component';
import {TestIterationListComponent} from '../components/test-iteration-list/test-iteration-list.component';
import {CampagneprepareComponent} from '../components/campagneprepare/campagneprepare.component';
import {CampagneExcuteComponent} from '../components/campagne-excute/campagne-excute.component';
import {ResultCollectionComponent} from '../components/result-collection/result-collection.component';
import {TestIterationDetailsComponent} from '../components/test-iteration-details/test-iteration-details.component';
import {ImportCampaignComponent} from '../components/import-campaign/import-campaign.component';
import {CampaignListComponent} from '../components/campaign-list/campaign-list.component';

const routes: Routes = [
  {
    path: '', component: BoardBillingManagerComponent, children: [
      {
        path: 'create', component: AddTestIterationComponent
      },
      {path: 'viewlist', component: TestIterationListComponent},
      {path: 'Marketing Campagne Prepartion', component: CampagneprepareComponent},
      {path: 'Run Campagne Marketing', component: CampagneExcuteComponent},
      {path: 'Result Collection', component: ResultCollectionComponent},
      {path: 'test details', component: TestIterationDetailsComponent},
      {path: 'Import', component: ImportCampaignComponent},
      {path: 'campaigns', component: CampaignListComponent}

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardBillingManagerRoutingModule {
}
