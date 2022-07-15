import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/containers/passenger-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
