import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { MatDialogModule } from '@angular/material/dialog';
import { LoginRecruiterComponent } from './login-recruiter/login-recruiter.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterRecruiterComponent } from './register-recruiter/register-recruiter.component';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
// import { MessageComponent } from './message/message.component';

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
    LoginRecruiterComponent,
    LoginAdminComponent,
    RegisterRecruiterComponent,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule
    // MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  exports: [
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}, 
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
