import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardBillingManagerRoutingModule } from './board-billing-manager-routing.module';
import {AddTestIterationComponent} from "../components/add-test-iteration/add-test-iteration.component";
import {TestIterationListComponent} from "../components/test-iteration-list/test-iteration-list.component";
import {BoardBillingManagerComponent} from "./board-billing-manager.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CampagneprepareComponent} from "../components/campagneprepare/campagneprepare.component";
import {CampagneExcuteComponent} from "../components/campagne-excute/campagne-excute.component";
import {ResultCollectionComponent} from "../components/result-collection/result-collection.component";


@NgModule({
  declarations: [
    AddTestIterationComponent ,
    TestIterationListComponent,
    CampagneprepareComponent,
    CampagneExcuteComponent,
    ResultCollectionComponent,
    BoardBillingManagerComponent
  ],
    imports: [
        CommonModule,
        BoardBillingManagerRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class BoardBillingManagerModule { }
