import { ListDocumentsComponent } from './documents/list-documents/list-documents.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { PaiementComponent } from './paiement/paiement.component';
import { LogoutComponent } from './logout/logout.component';
import { UserProfilComponent } from './users/user-profil/user-profil.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'mes_documents', component: ListDocumentsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'how-works', component: HowWorksComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'paiement', component: PaiementComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent },
  { path: 'profil', component: UserProfilComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
