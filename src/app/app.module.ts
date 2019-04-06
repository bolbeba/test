import { MattersModule } from './matters/matters.module';
import { UniversityModule } from './universities/university.module';
import { CountryModule } from './countries/country.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { WorkMethodComponent } from './work-method/work-method.component';
import { EducshareInfoComponent } from './educshare-info/educshare-info.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { TermsComponent } from './terms/terms.component';
import { PaiementComponent } from './paiement/paiement.component';
import { AuthenticationService } from './service/authentication.service';
import { LogoutComponent } from './logout/logout.component';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import { DisplayCommentComponent } from './comments/display-comment/display-comment.component';
import { ListCommentComponent } from './comments/list-comment/list-comment.component';
import { DocumentsModule } from './documents/documents.module';
import { DepartementModule } from './departements/departement.module';
import { CourseModule } from './courses/course.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagerModule } from './pager/pager.module';
import { SignupModule } from './signup/signup.module';
import { UserProfilModule } from './users/user-profil.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    SubjectListComponent,
    WorkMethodComponent,
    EducshareInfoComponent,
    TestimonialComponent,
    LoginComponent,
    ErrorComponent,
    ContactComponent,
    HowWorksComponent,
    TermsComponent,
    PaiementComponent,
    LogoutComponent,
    AddCommentComponent,
    DisplayCommentComponent,
    ListCommentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DepartementModule,
    UniversityModule,
    CourseModule,
    DashboardModule,
    CountryModule,
    MattersModule,
    PagerModule,
    DocumentsModule,
    SignupModule,
    UserProfilModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
