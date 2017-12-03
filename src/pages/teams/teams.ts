import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHome } from '../pages';
import { EliteApi } from '../../shared/shared'

//@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class Teams {

  teams = [];
  // teams = [
  //   {id: 1, name: 'HC Elite'},
  //   {id: 2, name: 'Team Takeover'},
  //   {id: 3, name: 'DC Thumder'}
  // ];

  constructor(private nav: NavController, public navParams: NavParams, private eliteApi: EliteApi) {}

  //runs when the page has loaded
  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    //calling this using RxJS
    this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
      this.teams = data.teams;
    });
  }

  itemTapped($event, team) {
    this.nav.push(TeamHome, team); //team as second parameter will be sent to the TeamDetail page
  }

  

}
