import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
// { path: 'trips/:id', component: SingleTripComponent },
// import { ExampleComponent } from './example/example.component';
import { TripsComponent } from './pages/trips/trips.component';
import { HomeContentComponent } from './pages/home-content/home-content.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { JoinOurTeamComponent } from './pages/join-our-team/join-our-team.component';
import { SingleTripComponent } from './pages/single-trip/single-trip.component';

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'trips/:id', component: SingleTripComponent },
  { path: 'join-our-team', component: JoinOurTeamComponent },
  { path: 'single-trip', component: SingleTripComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeContentComponent,
  LoginComponent,
  SignupComponent,
  NavbarComponent,
  TripsComponent,
  JoinOurTeamComponent,
  SingleTripComponent,
];
