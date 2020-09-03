import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardBillingManagerRoutingModule } from './board-billing-manager-routing.module';
import {AddTestIterationComponent} from "../components/add-test-iteration/add-test-iteration.component";
import {TestIterationListComponent} from "../components/test-iteration-list/test-iteration-list.component";
import {BoardBillingManagerComponent} from "./board-billing-manager.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddTestIterationComponent ,
    TestIterationListComponent,
    BoardBillingManagerComponent
  ],
  imports: [
    CommonModule,
    BoardBillingManagerRoutingModule,
    FormsModule
  ]
})
export class BoardBillingManagerModule { }
