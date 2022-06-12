import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {
  mostPopular: Trip[];
  upComing: Trip[];
  tripService: TripService;

  constructor(tripService: TripService) {
    this.tripService = tripService;
    this.mostPopular = tripService.popular();
    this.upComing = tripService.upcoming();
  }

  ngOnInit(): void {
  }

}
