import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RosterComponent } from 'src/app/roster/roster.component';
import { HistoricalplayersComponent } from 'src/app/historicalplayers/historicalplayers.component';
import { CurrentteamsComponent } from 'src/app/currentteams/currentteams.component';
import { HistoricalteamsComponent } from 'src/app/historicalteams/historicalteams.component';
import { GamesComponent } from 'src/app/games/games.component';
import { AboutComponent } from 'src/app/about/about.component';
import { LandingPageComponent } from 'src/app/landing-page/landing-page.component';
import { SingleGameComponent } from 'src/app/games/single-game/single-game.component';
import { NotFoundComponent } from 'src/app/not-found-component/not-found.component';
const routes: Routes = [
  { path: 'CurrentPlayers', component: RosterComponent},
  { path: 'HistoricalPlayers', component: HistoricalplayersComponent},
  { path: 'CurrentTeams', component: CurrentteamsComponent},
  { path: 'HistoricalTeams', component: HistoricalteamsComponent},
  { path: 'Games', component: GamesComponent },
  { path: 'GameDetails/:id', component: SingleGameComponent },
  { path: 'About', component: AboutComponent},
  { path: '', component: LandingPageComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
