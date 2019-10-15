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
  {path: 'register', component: RegisterComponent}, 
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    { enableTracing: true } //enableTracing is for debugging purposes only.
    )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
