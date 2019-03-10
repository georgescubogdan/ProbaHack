import { Component, OnInit } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { Station } from './station';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ticket } from './ticket';

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

  ticketRequestFormGroup = new FormGroup({
    'numberOfPersons': new FormControl(1, [Validators.required, Validators.min(1), Validators.max(5)]),
    'startStation': new FormControl(null, Validators.required),
    'endStation': new FormControl(null, Validators.required)
  });

  constructor(private _dataProviderService: DataProviderService) {}

  ngOnInit(): void {
    this.startStations = this.stations.slice(0, this.stations.length - 1);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);
    this._dataProviderService.getTickets(1, 4, 5);

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

  onSubmit() {
    if (this.ticketRequestFormGroup.valid) {
      console.log(this.ticketRequestFormGroup.get('startStation').value.stationNumber, this.ticketRequestFormGroup.get('endStation').value.stationNumber, this.ticketRequestFormGroup.get('numberOfPersons').value);
      this.tickets = this._dataProviderService.getTickets(
        this.ticketRequestFormGroup.get('startStation').value.stationNumber,
        this.ticketRequestFormGroup.get('endStation').value.stationNumber,
        this.ticketRequestFormGroup.get('numberOfPersons').value
      );
    }
  }
}
