import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { RegistrationComponent } from './registration/registration.component';
import { InsightComponent } from './insight/insight.component';
import { GameonComponent } from './gameon/gameon.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'insight', component:InsightComponent},
  {path: 'gameon', component: GameonComponent},
  {path: 'privacy', component:PrivacyComponent},
  {path: 'terms', component:TermsConditionComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: '', component:HomeComponent},
  {path: '**', component:HomeComponent},
  {path: '*', component:HomeComponent}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
