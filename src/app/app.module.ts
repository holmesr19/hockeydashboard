import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RosterComponent } from './roster/roster.component';
import { RosterService } from 'src/app/services/roster.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    HeaderComponent
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
    MatButtonModule
  ],
  providers: [RosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
