import { MatMenuModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { SignupComponent } from './signup/signup.component';
import { UidLocationComponent } from './uid-location/uid-location.component';
import { UidParentComponent } from './uid-parent/uid-parent.component';
import { UidEventComponent } from './uid-event/uid-event.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import QueResponseService from './shared/api/QueResponse.service';
import { HttpClientModule } from '@angular/common/http';
import { GuidComponent } from './guid/guid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    SignupComponent,
    UidLocationComponent,
    UidParentComponent,
    UidEventComponent,
    DashboardComponent,
    GuidComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatMenuModule
    //HttpClient
  ],
  providers: [QueResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
