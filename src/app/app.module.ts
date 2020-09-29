import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {BoardBillingManagerComponent} from "./board-billing-manager/board-billing-manager.component";
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//import { ResultCollectionComponent } from './components/result-collection/result-collection.component';

//import { CampagneExcuteComponent } from './components/campagne-excute/campagne-excute.component';
//import { CampagnemarketingComponent } from './components/campagneprepare/campagnemarketing/campagnemarketing.component';
//import { CampagneprepareComponent } from './components/campagneprepare/campagneprepare.component';

//import { UserListComponent } from './components/user-list/user-list.component';
//import { AddTestIterationComponent } from './components/add-test-iteration/add-test-iteration.component';
//import { TestIterationDetailsComponent } from './components/test-iteration-details/test-iteration-details.component';
//import { TestIterationListComponent } from './components/test-iteration-list/test-iteration-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //RegisterComponent,
    HomeComponent,
    ProfileComponent,
    //BoardAdminComponent,
    //BoardBillingManagerComponent,
    BoardUserComponent,
    FooterComponent,
    //ResultCollectionComponent,
    //CampagneExcuteComponent,
    //CampagnemarketingComponent,
    //CampagneprepareComponent,

    //UserListComponent,
   // AddTestIterationComponent,
   // TestIterationDetailsComponent,
   // TestIterationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
