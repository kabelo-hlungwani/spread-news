import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgToastModule } from 'ng-angular-popup';
import { GuardService } from './service/guard.service';
import { AuthService } from './service/auth.service';
import { AuthornavbarComponent } from './author/authornavbar/authornavbar.component';
import { AuthordashboardComponent } from './author/authordashboard/authordashboard.component';
import { AuthorfooterComponent } from './author/authorfooter/authorfooter.component';
import { AuthorprofileComponent } from './author/authorprofile/authorprofile.component';
import { DashboardadminComponent } from './admin/dashboardadmin/dashboardadmin.component';
import { ProfileadminComponent } from './admin/profileadmin/profileadmin.component';
import { AddpostadminComponent } from './admin/addpostadmin/addpostadmin.component';
import { ViewauthoradminComponent } from './admin/viewauthoradmin/viewauthoradmin.component';
import { FooteradminComponent } from './admin/footeradmin/footeradmin.component';
import { SidemenuadminComponent } from './admin/sidemenuadmin/sidemenuadmin.component';
import { TopnavComponent } from './admin/topnav/topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AuthornavbarComponent,
    AuthordashboardComponent,
    AuthorfooterComponent,
    AuthorprofileComponent,
    DashboardadminComponent,
    ProfileadminComponent,
    AddpostadminComponent,
    ViewauthoradminComponent,
    FooteradminComponent,
    SidemenuadminComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,NgToastModule,
    AppRoutingModule,FormsModule,RouterModule.forRoot([

     
    ]),
  ],
  providers: [GuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
