import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UidEventComponent } from './uid-event/uid-event.component';
import { UidParentComponent } from './uid-parent/uid-parent.component';
import { AppComponent } from './app.component';
import { UidLocationComponent } from './uid-location/uid-location.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 
const routes: Routes = [
   {path: 'dashboard', component: DashboardComponent},
   {path: 'signup', component: SignupComponent},
   {path: 'uidparent', component: UidParentComponent},
   {path: 'uidevent', component: UidEventComponent},
   {path: 'uidlocation', component: UidLocationComponent},



];

 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
 })
 export class AppRoutingModule {

 }