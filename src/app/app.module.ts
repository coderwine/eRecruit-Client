import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecSearchComponent } from './rec-search/rec-search.component';
import { ClientComponent } from './client/client.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FullComponent } from './full/full.component';


@NgModule({
  declarations: [
    AppComponent,
    RecSearchComponent,
    ClientComponent,
    RecruiterComponent,
    AdminComponent,
    PageNotFoundComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
