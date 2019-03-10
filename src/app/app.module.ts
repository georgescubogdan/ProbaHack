import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialContainerModule } from './material-container/material-container.module';
import { TrainDisplayerComponent } from './train-displayer/train-displayer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArraySortPipe } from './utils/array-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TrainDisplayerComponent,
    ArraySortPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialContainerModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
