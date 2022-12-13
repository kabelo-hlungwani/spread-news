import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostadminComponent } from './admin/addpostadmin/addpostadmin.component';
import { ArticlebinComponent } from './admin/articlebin/articlebin.component';
import { AuthorsComponent } from './admin/authors/authors.component';
import { DashboardadminComponent } from './admin/dashboardadmin/dashboardadmin.component';
import { EditarticleComponent } from './admin/editarticle/editarticle.component';
import { MyarticleComponent } from './admin/myarticle/myarticle.component';
import { ProfileadminComponent } from './admin/profileadmin/profileadmin.component';
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
{ path: 'dashboardadmin', component: DashboardadminComponent,canActivate:[AuthService] },
{ path: 'profileadmin', component: ProfileadminComponent,canActivate:[AuthService] },
{ path: 'addpostadmin', component: AddpostadminComponent,canActivate:[AuthService] },
{ path: 'myarticle', component: MyarticleComponent,canActivate:[AuthService] },
{ path: 'articlebin', component: ArticlebinComponent,canActivate:[AuthService] },
{ path: 'authors', component: AuthorsComponent,canActivate:[AuthService] },
{ path: 'editarticle', component: EditarticleComponent,canActivate:[AuthService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
