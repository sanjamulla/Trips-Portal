import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../../../interfaces/trip';
import { Router } from '@angular/router';

@Component({
  selector: 'trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss'],
})
export class TripCardComponent implements OnInit {
  @Input() trip!: Trip;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelect(trip: any) {
    this.router.navigate(['/trips', trip.id]);
  }
}
