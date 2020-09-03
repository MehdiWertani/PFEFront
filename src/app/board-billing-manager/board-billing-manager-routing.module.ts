import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardBillingManagerComponent} from "./board-billing-manager.component";
import {AddTestIterationComponent} from "../components/add-test-iteration/add-test-iteration.component";
import {TestIterationListComponent} from "../components/test-iteration-list/test-iteration-list.component";

const routes: Routes = [
  {path:'',component:BoardBillingManagerComponent,children:[
      {
        path:'create',component:AddTestIterationComponent},
      {path:'viewlist',component:TestIterationListComponent},

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardBillingManagerRoutingModule { }
