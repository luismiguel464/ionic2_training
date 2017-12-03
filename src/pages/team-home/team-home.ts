import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Standings, TeamDetail, MyTeamsPage} from '../pages';

//@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHome {

  //This is the how you assign pages to the Tabs
  teamDetailTab = TeamDetail;
  standingsTab = Standings;

  team: any;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  goHome() {
    //this.nav.push(MyTeamsPage);
    this.nav.popToRoot(); //this will send back to the root page
  }

}
