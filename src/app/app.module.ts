import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialContainerModule } from './material-container/material-container.module';
import { TrainDisplayerComponent } from './train-displayer/train-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainDisplayerComponent
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
