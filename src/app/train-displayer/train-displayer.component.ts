import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { Station } from '../station';
@Component({
  selector: 'app-train-displayer',
  templateUrl: './train-displayer.component.html',
  styleUrls: ['./train-displayer.component.scss']
})
export class TrainDisplayerComponent implements OnInit {
  stations: Station[];
  constructor(private dataProvider: DataProviderService) { }

  ngOnInit() {
    this.stations = this.dataProvider.stations;
  }
}
