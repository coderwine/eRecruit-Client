import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from './guards/jwt.interceptor'; 
import { ErrorInterceptor } from './guards/error.interceptor'; 
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecSearchComponent } from './rec-search/rec-search.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FullComponent } from './full/full.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RecSearchComponent,
    ClientComponent,
    AdminComponent,
    PageNotFoundComponent,
    FullComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}, 
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
