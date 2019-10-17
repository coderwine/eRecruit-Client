import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component'; 
import { AuthGuard } from './guards/auth.guard'; 
import { FullComponent } from './full/full.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard] }, 
  {path: 'login', component: LoginComponent}, 
  {path: 'signup', component: RegisterComponent}, 
  {path: 'splashPage', component: FullComponent},
  {path: 'logout', component: LoginComponent},
<<<<<<< HEAD
  // {path: '**', redirectTo: PageNotFoundComponent}
=======
  {path: '**', redirectTo: ''}
>>>>>>> 9480ed3cbbbf79aec85e902d68528e7f92d1eef4
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    { enableTracing: false } //enableTracing is for debugging purposes only.
    )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
