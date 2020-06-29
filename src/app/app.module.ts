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
import { TodaysgamesComponent } from './todaysgames/todaysgames.component';
import { FindgamesComponent } from './findgames/findgames.component';
import { AboutComponent } from './about/about.component';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    HeaderComponent,
    HistoricalplayersComponent,
    HistoricalteamsComponent,
    CurrentteamsComponent,
    TodaysgamesComponent,
    FindgamesComponent,
    AboutComponent
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
