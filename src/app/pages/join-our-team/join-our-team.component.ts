import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-our-team',
  templateUrl: './join-our-team.component.html',
  styleUrls: ['./join-our-team.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 0,

      })),

      state('hidden', style({
        opacity: 1,
      })),

      transition('show => hidden', animate('1000ms ease-out')),
      transition('hidden => show', animate('600ms ease-in'))

    ])
  ]
})
export class JoinOurTeamComponent implements OnInit {

  constructor() { }

  hidden: boolean = false

  contact: boolean = false


  get stateName() {
    return this.hidden ? 'hidden' : 'show'
  }




  toggle() {
    return this.hidden = !this.hidden
  }


  ngOnInit(): void {
  }



}
