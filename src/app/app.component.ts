import { Component, OnInit, HostBinding, ViewChild, ElementRef, Inject } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { Station } from './station';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ticket } from './ticket';
import { Cart } from './cart';
import { OverlayContainer} from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  title = 'ProbaHack';
  selectedStation: Station = null;
  startStations: Station[] = null;
  tickets: Ticket[] = null;
  displayQuestion = false;
  displayNoSeatsError = false;
  ticketsNumber = null;

  ticketRequestFormGroup = new FormGroup({
    'numberOfPersons': new FormControl(1, [Validators.required, Validators.min(1), Validators.max(5)]),
    'startStation': new FormControl(null, Validators.required),
    'endStation': new FormControl(null, Validators.required)
  });

  constructor(private _dataProviderService: DataProviderService, private overlayContainer: OverlayContainer, @Inject(DOCUMENT) private document: any) {}
  @HostBinding('class') componentCssClass;

  onSetTheme(event) {
      let theme = 'light-theme';
      if (event.checked) {
        theme = 'dark-theme';
      }
      if (theme == 'dark-theme') {
        this.document.body.style.background = '#303030';
      } else {
        this.document.body.style.background = '';
      }
      this.overlayContainer.getContainerElement().classList.add(theme);
      this.componentCssClass = theme;
    }

  ngOnInit(): void {
    this.startStations = this.stations.slice(0, this.stations.length - 1);
    this.ticketRequestFormGroup.get('startStation').valueChanges.subscribe(data => this.displayNoSeatsError = false);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);
    // this._dataProviderService.getTickets(1, 4, 5);

  }

  getEndStations(): Station[] {
    if (this.ticketRequestFormGroup.get('startStation').value !== null) {
      return this.stations.slice(this.ticketRequestFormGroup.get('startStation').value.stationNumber, this.stations.length);
    }
    return null;
  }

  get stations() {
    return this._dataProviderService.stations;
  }

  getNumberOfAvailableSeats(from: number, to: number): number {
    let numberOfAvSeats = 400;

    this.stations.filter(s => s.stationNumber >= from && s.stationNumber < to).forEach(station => {
      let stAvSeats = 0;
      station.carts.forEach(cart => {
        stAvSeats += cart.availability;
      });
      numberOfAvSeats = Math.min(numberOfAvSeats, stAvSeats);
    });

    console.log(numberOfAvSeats);
    
    return numberOfAvSeats;
  }

  onSubmit() {
    this.displayNoSeatsError = false;
    this.tickets = null;
    if (this.ticketRequestFormGroup.valid) {
      const avSeats = this.getNumberOfAvailableSeats(this.ticketRequestFormGroup.get('startStation').value.stationNumber,
        this.ticketRequestFormGroup.get('endStation').value.stationNumber);
      if (avSeats === 0) {
        this.displayNoSeatsError = true;
        // this.ticketRequestFormGroup.disable();
      } else if (this.ticketRequestFormGroup.get('numberOfPersons').value > avSeats) {
        this.displayQuestion = true;
        this.ticketsNumber = avSeats;
      } else {
        this.getTickets();
      }
    }
  }

  confirmedBuy() {
    this.displayQuestion = false;
    this.getTickets();
    this.displayNoSeatsError = true;
    // this.ticketRequestFormGroup.disable();
  }

  declinedBuy() {
    this.displayQuestion = false;
  }

  getSortedCarts(station: Station) {
    return station.carts.sort((a, b) => a.cartNumber - b.cartNumber);
  }

  getSortedCompartments(cart: Cart){
    return cart.compartments.sort((a, b) => a.compartmentNumber - b.compartmentNumber);
  }

  getTickets() {
    this.tickets = this._dataProviderService.getTickets(
      this.ticketRequestFormGroup.get('startStation').value.stationNumber,
      this.ticketRequestFormGroup.get('endStation').value.stationNumber,
      this.ticketRequestFormGroup.get('numberOfPersons').value
    );
  }
}
