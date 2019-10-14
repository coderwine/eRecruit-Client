import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},

  // {path: '/users/client', component: ClientComponent },
  {path: 'users', component: RecruiterComponent },
  // {path: '/users/admin', component: AdminComponent },

  {path: '**', component: PageNotFoundComponent}
  // This wildcard route should point to a default "page not found"  *I've added this component

];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    { enableTracing: true } //enableTracing is for debugging purposes only.
    )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
