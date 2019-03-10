import { Injectable } from '@angular/core';
import { Station } from './station';
import { Cart } from './cart';
import { Compartment } from './compartment';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  stations: Station[];

  constructor() {
    this.stations = [
      {
        name: 'Bucuresti Nord',
        stationNumber: 1,
        carts: this.cartsInitializer()
      },
      {
        name: 'Ploiesti Vest',
        stationNumber: 2,
        carts: this.cartsInitializer()
      },
      {
        name: 'Campina',
        stationNumber: 3,
        carts: this.cartsInitializer()
      },
      {
        name: 'Sinaia',
        stationNumber: 4,
        carts: this.cartsInitializer()
      },
      {
        name: 'Busteni',
        stationNumber: 5,
        carts: this.cartsInitializer()
      },
      {
        name: 'Azuga',
        stationNumber: 6,
        carts: this.cartsInitializer()
      },
      {
        name: 'Predeal',
        stationNumber: 7,
        carts: this.cartsInitializer()
      },
      {
        name: 'Brasov',
        stationNumber: 8,
        carts: this.cartsInitializer()
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

  ticketGenerator(from: number, to: number, noTickets: number, cart: number): Ticket[] {
    const compartment = this.getBestCompartment(from, to, noTickets, cart);
    for (let i = from; i < to; i++) {
      const c = this.stations[i - 1].carts.find(c => c.cartNumber === cart).compartments.find(c => c.compartmentNumber == compartment);
      c.availability -= noTickets;
      this.stations[i - 1].carts.find(c => c.cartNumber === cart).availability -= noTickets;
      let seatsNeeded = noTickets;
      for (let seat of c.seats) {
        if (seat === false) {
          seat = true;
          seatsNeeded--;
        }
        if (seatsNeeded === 0) {
          break;
        }
      }
    }
    const c = this.stations[to - 1].carts.find(c => c.cartNumber === cart).compartments.find(c => c.compartmentNumber == compartment);
    c.availability -= noTickets;
    const tickets: Ticket[] = [];
    let seatsNeeded = noTickets;
    for (let i = 0; i < c.seats.length; i++) {
      if (c.seats[i] === false) {
        c.seats[i] = true;
        seatsNeeded--;
        tickets.push(
          {
            initialStation: from,
            initialStationName: this.stations[from - 1].name,
            finalStationName: this.stations[to - 1].name,
            finalStation: to,
            cart,
            compartment,
            seat: i + 1
          }
          );
        }
      if (seatsNeeded === 0) {
          break;
        }
      }
    return tickets;
  }

  getTickets(from: number, to: number, noTickets: number): Ticket[] {
    const cart = this.getBestCart(from, to, noTickets);
    console.log(this.stations[from - 1].carts.find(c => c.cartNumber === cart).availability);
    let cartTicketsNum = noTickets;
    if (noTickets == 0 || this.stations[from - 1].carts.find(c => c.cartNumber === cart).availability === 0) {
      return [];
      // TODO: no tickets available
    }
    if (this.stations[from - 1].carts.find(c => c.cartNumber === cart).availability < noTickets) {
      cartTicketsNum = this.stations[from - 1].carts.find(c => c.cartNumber === cart).availability
    }

    const max = this.getMaxCompartmentAvailability(from, to, cart);
    console.log('max ' + max);
    if (max >= cartTicketsNum) {
      return this.ticketGenerator(from, to, cartTicketsNum, cart);
    } else {
      if (max === 1) {
        let tickets: Ticket[] = [];
        for (let i = 1; i <= cartTicketsNum; i++) {
          tickets = tickets.concat(this.ticketGenerator(from, to, 1, cart));
        }
        return tickets.concat(this.getTickets(from, to, noTickets - cartTicketsNum));

      } else if (max === 2) {
        let tickets: Ticket[] = [];
        if (cartTicketsNum === 5) {
          tickets = tickets.concat(this.ticketGenerator(from, to, 2, cart));
          tickets = tickets.concat(this.ticketGenerator(from, to, 1, cart));
          tickets = tickets.concat(this.ticketGenerator(from, to, 2, cart));
        } else {
          tickets = tickets.concat(this.ticketGenerator(from, to, max, cart));
          tickets = tickets.concat(this.ticketGenerator(from, to, noTickets - max, cart));
        }
        return tickets.concat(this.getTickets(from, to, noTickets - cartTicketsNum));

      } else if (max === 3) {
        let tickets: Ticket[] = [];
        if (cartTicketsNum === 4) {
          tickets = tickets.concat(this.ticketGenerator(from, to, 2, cart));
          tickets = tickets.concat(this.ticketGenerator(from, to, 2, cart));
        } else {
          tickets = tickets.concat(this.ticketGenerator(from, to, 3, cart));
          tickets = tickets.concat(this.ticketGenerator(from, to, 2, cart));
        }
        return tickets.concat(this.getTickets(from, to, noTickets - cartTicketsNum));

      } else {
        let tickets: Ticket[] = [];
        tickets = tickets.concat(this.ticketGenerator(from, to, 3, cart));
        tickets = tickets.concat(this.ticketGenerator(from, to, 2, cart));
        return tickets.concat(this.getTickets(from, to, noTickets - cartTicketsNum));
      }
    }

  }

  getBestCart(from: number, to: number, noTickets: number): number {
    return this.stations[from - 1].carts.sort((a, b) => b.availability - a.availability)[0].cartNumber;
  }

  getBestCompartment(from: number, to: number, noTickets: number, cart: number): number {
    const mat: any[] = [];
    for (let i = from; i <= to; i++) {
      mat.push((this.stations[i - 1].carts.find(c => c.cartNumber === cart).compartments
      .map(a => { if (a.availability >= noTickets) { return a.compartmentNumber; } }))
      .sort((a, b) => a - b));
    }
    let common: any[] = mat[0];
    for (let i = 0; i < to - from; i++) {
      common = common.filter((v: any) => {
        return mat[i].includes(v);
      });
    }
    return common[0];
  }

  getMaxCompartmentAvailability(from: number, to: number, cart: number) {
    const mat: any[] = [];
    for (let i = from; i <= to; i++) {
      mat.push((this.stations[i - 1].carts.find(c => c.cartNumber === cart).compartments
      .sort((a, b) => a.availability - b.availability)
      .map(a => a.availability )));
    }
    let common: any[] = mat[0];
    for (let i = 0; i < to - from; i++) {
      common = common.filter((v: any) => {
        return mat[i].includes(v);
      });
    }
    common.sort((a, b) => b - a);
    return common[0];
  }

}
