import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component'; 
import { AuthGuard } from './guards/auth.guard'; 
import { FullComponent } from './full/full.component';
import { ClientComponent } from './client/client.component';
import {JobsComponent} from './jobs/jobs.component'
import { AdminComponent } from './admin/admin.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FullMessageComponent } from './fullmessage/fullmessage.component';
import { ClientmessageComponent } from './clientmessage/clientmessage.component';
import { LoginRecruiterComponent } from './login-recruiter/login-recruiter.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterRecruiterComponent } from './register-recruiter/register-recruiter.component';
//import { MessageComponent } from './message/message.component';

import { CustomerComponent } from './customer/customer.component';
import {CustomerClientComponent} from './customer-client/customer-client.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerClientDetailsComponent } from './customer-client-details/customer-client-details.component';




const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [AuthGuard] }, 
  {path: 'login', component: LoginComponent},
  {path: 'recLogin', component: LoginRecruiterComponent}, 
  {path: 'adminLogin', component: LoginAdminComponent}, 
  {path: 'signup', component: RegisterComponent}, 
  {path: 'recSignup', component: RegisterRecruiterComponent}, 
  {path: 'splashPage', component: FullComponent},
  {path: 'messaging', component: FullMessageComponent},
  {path: 'clientPage', component: ClientComponent},
  //{path: 'messaging', component: MessageComponent},
  {path: 'adminPortal', component: AdminComponent},
  {path: 'clientMessaging', component: ClientmessageComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'jobs', component: JobsComponent},

  {path: 'customers', component: CustomerComponent},
  {path: 'customers-client', component: CustomerClientComponent},
  {path: 'customer/add', 
    component: AddCustomerComponent 
  },
  {path: 'customers/:id', 
    component: CustomerDetailsComponent 
  },
  { path: 'customers-client/:id', component: CustomerClientDetailsComponent}
//   {path: '', 
//     redirectTo: 'customers', 
//     pathMatch: 'full'
//   }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    { enableTracing: false } //enableTracing is for debugging purposes only.
    )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
