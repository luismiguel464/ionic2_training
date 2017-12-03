import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { MyTeamsPage } from '../pages/my-teams/my-teams.page';
import { Tournaments } from '../pages/tournaments/tournaments.page';
import { Teams } from '../pages/teams/teams';
import { TeamDetail } from '../pages/team-detail/team-detail';
import { Standings } from '../pages/standings/standings';
import { TeamHome } from '../pages/team-home/team-home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    //ListPage,
    MyTeamsPage,
    Tournaments,
    Teams,
    TeamDetail,
    TeamHome,
    Standings
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    //ListPage,
    MyTeamsPage,
    Tournaments,
    Teams,
    TeamDetail,
    TeamHome,
    Standings
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
