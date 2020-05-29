import { Component, OnInit, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';
import { TeamRoster } from 'src/app/interfaces/TeamRoster';
import { Team } from 'src/app/interfaces/Team';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Player } from 'src/app/interfaces/Player';
import { Person } from 'src/app/interfaces/Person';
import { PersonExtended } from 'src/app/interfaces/PersonExtended';
import { StatsObj } from 'src/app/interfaces/StatsObj';
import * as d3 from 'd3';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit, OnChanges {
  teams: Team[];
  players: Player[];
  showPlayerCards: boolean;
  person: Person;
  selectedTeam: string;
  selectedPlayer: Player;
  selectedSeason: string;
  playerProfile: PersonExtended;
  years: string[];
  nyears: number;
  yearlyStats: any[];
  private chartContainer: ElementRef;
  margin = {top: 20, right: 20, bottom: 30, left: 40};

  constructor(private rosterService: RosterService,
              public fb: FormBuilder) {}

  ngOnInit() {
    this.showPlayerCards = false;
    this.rosterService.getTeams()
    .subscribe((data) => this.teams = data );
  }

  ngOnChanges() {
    if (!this.yearlyStats) { return; }
  }

  getRoster(value: string) {
    this.showPlayerCards = false;
    this.selectedSeason = '';
    this.rosterService.getRoster(value)
    .subscribe((data) => this.players = data );
  }

  getProfile(value: string) {
    this.selectedSeason = '';
    this.rosterService.getPlayer(value)
    .subscribe((data) => this.playerProfile = data );
    this.showPlayerCards = true;
    this.rosterService.getYearlyData(value)
    .subscribe((data) => this.yearlyStats = data );
    // console.log(this.getnyears(this.yearlyStats));
  }

/*   getnyears(seasons: any[]): number {
    return seasons.length;
  } */

  showMoreStats(season: string) {
    console.log(season);
  }


  // getYears(annuals: StatsObj[]): string[] {
  //   let playerYears = [];
  //   for (let i in annuals) {
  //   console.log(i);
  //   }
  //   return playerYears;
  //   }

//  }
}
