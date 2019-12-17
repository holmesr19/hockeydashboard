import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RosterComponent } from './roster/roster.component';
import { RosterService } from 'src/app/roster/roster.service';
import {HttpClientModule} from '@angular/common/http';
import { SvechnikovComponent } from './svechnikov/svechnikov.component';

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    SvechnikovComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
