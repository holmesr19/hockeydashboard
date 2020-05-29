import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RosterComponent } from 'src/app/roster/roster.component';
import { HistoricalplayersComponent } from 'src/app/historicalplayers/historicalplayers.component';
import { CurrentteamsComponent } from 'src/app/currentteams/currentteams.component';
import { HistoricalteamsComponent } from 'src/app/historicalteams/historicalteams.component';
import { TodaysgamesComponent } from 'src/app/todaysgames/todaysgames.component';
import { FindgamesComponent } from 'src/app/findgames/findgames.component';
import { AboutComponent } from 'src/app/about/about.component';


const routes: Routes = [
  { path: 'CurrentPlayers', component: RosterComponent},
  { path: 'HistoricalPlayers', component: HistoricalplayersComponent},
  { path: 'CurrentTeams', component: CurrentteamsComponent},
  { path: 'HistoricalTeams', component: HistoricalteamsComponent},
  { path: 'TodaysGames', component: TodaysgamesComponent},
  { path: 'FindGames', component: FindgamesComponent},
  { path: 'About', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
