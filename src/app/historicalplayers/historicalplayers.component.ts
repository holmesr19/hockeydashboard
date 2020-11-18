import { Component, OnInit } from '@angular/core';
import { HistoricalPlayerService } from 'src/app/services/historical-player.service';
import { FormBuilder } from '@angular/forms';
import { Team } from 'src/app/interfaces/Team';
import { Player } from 'src/app/interfaces/Player';
import { IdName } from 'src/app/interfaces/IdName';
import { PersonExtended } from 'src/app/interfaces/PersonExtended';
import { StatsObj } from 'src/app/interfaces/StatsObj';

@Component({
  selector: 'app-historicalplayers',
  templateUrl: './historicalplayers.component.html',
  styleUrls: ['./historicalplayers.component.scss']
})
export class HistoricalplayersComponent implements OnInit {
  years: string[];
  teams: Team[];
  players: Player[];
  showPlayerCards: boolean;
  selectedTeam: IdName;
  playerProfile: PersonExtended;
  yearlyStats: StatsObj[];

  constructor(private playerService: HistoricalPlayerService,
              public fb: FormBuilder) { }

  ngOnInit() {
    this.showPlayerCards = false;
    this.playerService.getYears()
    .subscribe((data) => this.years = data );
    console.log(this.years);
  }

  getTeams(year: string) {
    this.showPlayerCards = false;
    this.selectedTeam = {id: 0 , name: ''};
    this.playerService.getTeams(year)
    .subscribe((data) => this.teams = data );
  }

  getRoster(year: string, teamId: string) {
    this.showPlayerCards = false;
    this.playerService.getRoster(year, teamId)
    .subscribe((data) => this.players = data );
    console.log(this.players);
  }

  getProfile(playerId: string, year: string) {
    this.playerService.getPlayer(playerId)
    .subscribe((data) => this.playerProfile = data );
    this.playerService.getYearlyData(playerId, year)
    .subscribe((data) => this.yearlyStats = data );
    this.showPlayerCards = true;
  }
}
