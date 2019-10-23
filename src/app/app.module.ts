import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from './guards/jwt.interceptor'; 
import { ErrorInterceptor } from './guards/error.interceptor'; 
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecSearchComponent } from './rec-search/rec-search.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FullComponent } from './full/full.component';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
// import { MessageComponent } from './message/message.component';
import {MatDialogModule} from '@angular/material/dialog';
import { JobsComponent } from './jobs/jobs.component';
import { FullMessageComponent } from './fullmessage/fullmessage.component';
import { ClientmessageComponent } from './clientmessage/clientmessage.component';
import { LoginRecruiterComponent } from './login-recruiter/login-recruiter.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterRecruiterComponent } from './register-recruiter/register-recruiter.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CustomerClientComponent } from './customer-client/customer-client.component';
import { CustomerClientDetailsComponent } from './customer-client-details/customer-client-details.component';
import { PullRecService } from '../app/services/pull-userInfo/pull-rec.service';
import { PullClientService } from '../app/services/pull-userInfo/pull-client.service';
import { SearchClientsComponent } from './search-clients/search-clients.component';
import { SearchRecruitersComponent } from './search-recruiters/search-recruiters.component';




@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    RecSearchComponent,
    ClientComponent,
    AdminComponent,
    PageNotFoundComponent,
    FullComponent,
    JobsComponent,
    FullMessageComponent,
    ClientmessageComponent,
    LoginRecruiterComponent,
    LoginAdminComponent,
    RegisterRecruiterComponent,
    // MessageComponent
    CustomerComponent,
    CustomerDetailsComponent,
    AddCustomerComponent,
    CustomerClientComponent,
    CustomerClientDetailsComponent,
    SearchClientsComponent,
    SearchRecruitersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTooltipModule
  ],
  exports: [

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}, 
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    PullClientService,
    PullRecService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
