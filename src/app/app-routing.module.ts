import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component'; 
import { AuthGuard } from './guards/auth.guard'; 
import { FullComponent } from './full/full.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FullMessageComponent } from './fullmessage/fullmessage.component';
import { ClientmessageComponent } from './clientmessage/clientmessage.component';


const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [AuthGuard] }, 
  {path: 'login', component: LoginComponent}, 
  {path: 'signup', component: RegisterComponent}, 
  {path: 'splashPage', component: FullComponent},
  {path: 'clientPage', component: ClientComponent},
  {path: 'messaging', component: FullMessageComponent},
  {path: 'clientMessaging', component: ClientmessageComponent},
  {path: 'adminPortal', component: AdminComponent},
  {path: 'logout', component: LoginComponent},
  // {path: '**', redirectTo: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    { enableTracing: false } //enableTracing is for debugging purposes only.
    )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
