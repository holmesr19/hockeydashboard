import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RosterComponent } from './roster/roster.component';
import { RosterService } from 'src/app/services/roster.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatSelectModule, MatButtonModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule} from '@angular/material/menu';
import { HistoricalplayersComponent } from './historicalplayers/historicalplayers.component';
import { HistoricalteamsComponent } from './historicalteams/historicalteams.component';
import { CurrentteamsComponent } from './currentteams/currentteams.component';
import { GamesComponent } from './games/games.component';
import { AboutComponent } from './about/about.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { DatePipe } from '@angular/common';
import { SingleGameComponent } from './games/single-game/single-game.component';
import { NotFoundComponent } from './not-found-component/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    HeaderComponent,
    HistoricalplayersComponent,
    HistoricalteamsComponent,
    CurrentteamsComponent,
    GamesComponent,
    AboutComponent,
    LandingPageComponent,
    FooterComponent,
    SingleGameComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  providers: [RosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
