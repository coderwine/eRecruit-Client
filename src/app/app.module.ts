import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecSearchComponent } from './rec-search/rec-search.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FullComponent } from './full/full.component';


@NgModule({
  declarations: [
    AppComponent,
    RecSearchComponent,
    ClientComponent,
    AdminComponent,
    PageNotFoundComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
