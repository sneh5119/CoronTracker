import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StateComponent } from './state/state.component';
import { HttpClientModule } from '@angular/common/http';
import { DistrictComponent } from './district/district.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StateComponent,
    DistrictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
