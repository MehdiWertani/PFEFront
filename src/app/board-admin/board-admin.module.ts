import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardAdminRoutingModule } from './board-admin-routing.module';
import {UserListComponent} from "../components/user-list/user-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BoardAdminComponent} from "./board-admin.component";
import {RegisterComponent} from "../register/register.component";



@NgModule({
  declarations: [
    UserListComponent,
    RegisterComponent,
    BoardAdminComponent
  ],
  imports: [
    CommonModule,
    BoardAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class BoardAdminModule { }
