import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "../components/user-list/user-list.component";
import {BoardAdminComponent} from "./board-admin.component";
import {BoardBillingManagerComponent} from "../board-billing-manager/board-billing-manager.component";

const routes: Routes = [
  {path:'',component:BoardAdminComponent,children:[{ path: '', redirectTo: 'view-UserList', pathMatch: 'full' },
  { path: 'view-UserList', component: UserListComponent} , ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardAdminRoutingModule { }