import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardadminComponent } from './admin/dashboardadmin/dashboardadmin.component';
import { AuthordashboardComponent } from './author/authordashboard/authordashboard.component';
import { AuthorfooterComponent } from './author/authorfooter/authorfooter.component';
import { AuthornavbarComponent } from './author/authornavbar/authornavbar.component';
import { AuthorprofileComponent } from './author/authorprofile/authorprofile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/auth.service';

const routes: Routes = [{ path: '', component: HomepageComponent },{ path: 'navbar', component: NavbarComponent },
{path: 'register', component:RegisterComponent},{path: 'login', component:LoginComponent},
{ path: 'authordashboard', component: AuthordashboardComponent,canActivate:[AuthService] },
{ path: 'dashboardadmin', component: DashboardadminComponent,canActivate:[AuthService] },
{ path: 'authornavbar', component: AuthornavbarComponent,canActivate:[AuthService] },
{ path: 'authorfooter', component: AuthorfooterComponent,canActivate:[AuthService] },
{ path: 'authorprofile', component: AuthorprofileComponent,canActivate:[AuthService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
