import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Tournaments } from '../pages'; //Tournaments controller name

@Component({
    templateUrl: 'my-teams.page.html',
})

export class MyTeamsPage {

  constructor(private nav: NavController) {
  }

  goToTournaments() {
    this.nav.push(Tournaments)
  }

}