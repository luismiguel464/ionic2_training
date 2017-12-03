import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

import { MyTeamsPage, Teams } from '../pages';
import { EliteApi } from '../../shared/shared'

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.page.html',
})
export class Tournaments {

  tournaments: any;

  constructor(public nav: NavController, public navParams: NavParams, private eliteApi: EliteApi,
              private loadingController: LoadingController) {}

  itemTapped($event, tourney) {
    this.nav.push(Teams, tourney);
  }

  ionViewDidLoad() {
    //console.log("## lifecycle ## ionViewDidLoad")
    //loading
    let loader = this.loadingController.create({
      content: 'Getting tournaments...',
      //spinner: 'dots'
    });
    loader.present().then(() => { //shows loader while retrieving data
      this.eliteApi.getTournaments().then(data =>  {
        this.tournaments = data 
        loader.dismiss(); //hides loaders
      });
    });
    
  }

  ionViewWillEnter() {
    console.log("## lifecycle ## ionViewWillEnter")
  }

  ionViewWillLeave() {
    console.log("## lifecycle ## ionViewWillLeave")
  }

  ionViewDidUnload() {
    console.log("## lifecycle ## ionViewDidUnload")
  }

}
