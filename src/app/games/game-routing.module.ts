import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleGameComponent } from 'src/app/games/single-game/single-game.component';


const routes: Routes = [
  { path: 'GamePage/:id', component: SingleGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
