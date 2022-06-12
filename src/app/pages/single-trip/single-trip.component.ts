import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.scss'],
})
export class SingleTripComponent implements OnInit {
  trip: any;

  alert() {
    window.alert('Submitted succesfully!');
  }

  public tripId: number | undefined;
  public tripDestination: number | undefined;
  public tripPrice: number | undefined;
  constructor(
    private route: ActivatedRoute,
    private tripService: TripService
  ) {}

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    this.tripId = id;

    // this.trip = this.tripService.find(this.tripId);

    let destination = parseInt(
      this.route.snapshot.paramMap.get('destinationName') || '{}'
    );
    this.tripDestination = destination;

    // let price = parseInt(this.route.snapshot.paramMap.get('price') || '{}');
    // this.tripPrice = price;
  }

  // onBook() { 
    
  // }
}
