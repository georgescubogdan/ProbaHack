import { Injectable } from '@angular/core';
import { Station } from './station';
import { Cart } from './cart';
import { Compartment } from './compartment';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  stations: Station[];

  constructor() {
    this.stations = [
      {
        name: "Bucuresti Nord",
        stationNumber: 1,
        carts: this.cartsInitializer();
      },
      {
        name: "Ploiesti Vest",
        stationNumber: 2,
        carts: this.cartsInitializer();
      },
      {
        name: "Campina",
        stationNumber: 3,
        carts: this.cartsInitializer();
      },
      {
        name: "Sinaia",
        stationNumber: 4,
        carts: this.cartsInitializer();
      },
      {
        name: "Busteni",
        stationNumber: 5,
        carts: this.cartsInitializer();
      },
      {
        name: "Azuga",
        stationNumber: 6,
        carts: this.cartsInitializer();
      },
      {
        name: "Predeal",
        stationNumber: 7,
        carts: this.cartsInitializer();
      },
      {
        name: "Brasov",
        stationNumber: 8,
        carts: this.cartsInitializer();
      },
    ];
  }

  cartsInitializer(): Cart[] {
    return [
      {
        availability: 80,
        cartNumber: 1,
        compartments: this.compartmentsInitializer()
      },
      {
        availability: 80,
        cartNumber: 2,
        compartments: this.compartmentsInitializer()
      },
      {
        availability: 80,
        cartNumber: 3,
        compartments: this.compartmentsInitializer()
      },
      {
        availability: 80,
        cartNumber: 4,
        compartments: this.compartmentsInitializer()
      },
      {
        availability: 80,
        cartNumber: 5,
        compartments: this.compartmentsInitializer()
      }
    ];
  }

  compartmentsInitializer(): Compartment[] {
    return [
      {
        availability: 8,
        compartmentNumber: 1,
        seats: [false, false, false, false, false, false, false, false],
      },
      {
        availability: 8,
        compartmentNumber: 2,
        seats: [false, false, false, false, false, false, false, false],
      },
      {
        availability: 8,
        compartmentNumber: 3,
        seats: [false, false, false, false, false, false, false, false],
      },
      {
        availability: 8,
        compartmentNumber: 4,
        seats: [false, false, false, false, false, false, false, false],
      },
      {
        availability: 8,
        compartmentNumber: 5,
        seats: [false, false, false, false, false, false, false, false],
      },
      {
        availability: 8,
        compartmentNumber: 6,
        seats: [false, false, false, false, false, false, false, false],
      },
      {
        availability: 8,
        compartmentNumber: 7,
        seats: [false, false, false, false, false, false, false, false],
      },
      {
        availability: 8,
        compartmentNumber: 8,
        seats: [false, false, false, false, false, false, false, false],
      },
      {
        availability: 8,
        compartmentNumber: 9,
        seats: [false, false, false, false, false, false, false, false],
      },
      {
        availability: 8,
        compartmentNumber: 10,
        seats: [false, false, false, false, false, false, false, false],
      }
    ];
  }
}
