import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GameRoutingModule } from './game-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatFormFieldModule, MatSelectModule, MatButtonModule, MatNativeDateModule, MatInputModule, MatDatepickerModule } from '@angular/material';
import { FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import { GamesComponent } from './/games.component';
import { SingleGameComponent } from './single-game/single-game.component';
import { GamesService } from 'src/app/services/games.service';



@NgModule({
  declarations: [
    GamesComponent,
    SingleGameComponent
  ],
  imports: [
    BrowserModule,
    GameRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatDatepickerModule,      // <----- import(must)
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [GamesService],
  bootstrap: [GamesComponent]
})
export class GameModule { }
