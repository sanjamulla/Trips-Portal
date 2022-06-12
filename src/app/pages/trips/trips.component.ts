import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  trips: Trip[] = [];
  tripService: TripService;

  filters = {
    date: null, // current date
    destination: null, // or something special
    activity: null,
    difficulty: null
  }

  constructor(tripService: TripService) {
    this.tripService = tripService;
  }

  filterTrips(): void {
    this.trips = this.tripService.filter(this.filters);
  }

  ngOnInit(): void {
    this.trips = this.tripService.all();
  }
}
