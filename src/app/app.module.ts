import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {BoardBillingManagerComponent} from "./board-billing-manager/board-billing-manager.component";
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';

//import { UserListComponent } from './components/user-list/user-list.component';
//import { AddTestIterationComponent } from './components/add-test-iteration/add-test-iteration.component';
//import { TestIterationDetailsComponent } from './components/test-iteration-details/test-iteration-details.component';
//import { TestIterationListComponent } from './components/test-iteration-list/test-iteration-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    //BoardAdminComponent,
    //BoardBillingManagerComponent,
    BoardUserComponent,
    FooterComponent,

    //UserListComponent,
   // AddTestIterationComponent,
   // TestIterationDetailsComponent,
   // TestIterationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
