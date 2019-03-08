import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MaterialContainerModule } from './material-container/material-container.module';
=======
import { CompartmentComponent } from './compartment/compartment.component';
>>>>>>> 7758eb1ed915bd4b8fc8d402bd4e183725281307

@NgModule({
  declarations: [
    AppComponent,
    CompartmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
