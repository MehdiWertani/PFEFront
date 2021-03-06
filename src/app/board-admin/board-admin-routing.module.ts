import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from '../components/user-list/user-list.component';
import {BoardAdminComponent} from './board-admin.component';
import {RegisterComponent} from '../register/register.component';

const routes: Routes = [
  {
    path: '', component: BoardAdminComponent, children: [{path: '', redirectTo: 'view-UserList', pathMatch: 'full'},
      {path: 'view-UserList', component: UserListComponent},
      {path: 'CreateUser', component: RegisterComponent}]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardAdminRoutingModule {
}
