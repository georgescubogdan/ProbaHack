import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainDisplayerComponent } from './train-displayer/train-displayer.component';

const routes: Routes = [
  {path: 'stations', component: TrainDisplayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
