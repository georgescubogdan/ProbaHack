import { Component, OnInit, Input } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { Station } from '../station';
import { Cart } from '../cart';
@Component({
  selector: 'app-train-displayer',
  templateUrl: './train-displayer.component.html',
  styleUrls: ['./train-displayer.component.scss']
})
export class TrainDisplayerComponent implements OnInit {
  stations: Station[];
  @Input() stationNumber: number;
  constructor(private dataProvider: DataProviderService) { }

  getSortedCarts(station: Station) {
    return station.carts.sort((a, b) => a.cartNumber - b.cartNumber);
  }

  getSortedCompartments(cart: Cart){
    return cart.compartments.sort((a, b) => a.compartmentNumber - b.compartmentNumber);
  }


  ngOnInit() {
    this.stations = this.dataProvider.stations;
  }
}
