import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { DepartmentDetailsComponent } from './component/department-details/department-details.component';
import { DoctorDetailsComponent } from './component/doctor-details/doctor-details.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PatientRegistrationComponent } from './component/patient-registration/patient-registration.component';
import { ContactComponent } from './component/contact/contact.component';
import { NavbarTabsComponent } from './reusable/navbar-tabs/navbar-tabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppoinmentComponent } from './component/appoinment/appoinment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DepartmentDetailsComponent,
    DoctorDetailsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    PatientRegistrationComponent,
    ContactComponent,
    NavbarTabsComponent,
    PagenotfoundComponent,
    AppoinmentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
