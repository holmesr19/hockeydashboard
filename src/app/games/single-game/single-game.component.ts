import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { BoxScore, Official, BoxAwayHome } from 'src/app/interfaces/Game/GamesRes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss']
})
export class SingleGameComponent implements OnInit {

  gameId: string;
  gameData: BoxScore;
  showSummary = true;
  showOfficials = false;
  showPlayers = false;
  showContent = false;
  officialData: Official[];
  selectedTeam: string;
  showIndividualPlayerGameStats = false;
  selectedPlayer: any;
  homeTeamPlayers: any[];
  awayTeamPlayers: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private gameService: GamesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.gameId = params.get('id');
      
    });
    this.gameService.getGameBoxScore(this.gameId)
    .subscribe(data => {
      this.gameData = data;
      this.populatePlayers(this.gameData.teams);
      console.log(this.gameData);
    });
  }

  populatePlayers(teams: BoxAwayHome) {
    // could be more compact
    this.homeTeamPlayers = [];
    this.awayTeamPlayers = [];
    const homeTeamPlayerIDs = Object.getOwnPropertyNames(teams.home.players);
    const awayTeamPlayerIDs = Object.getOwnPropertyNames(teams.away.players);
    homeTeamPlayerIDs.forEach(element => {
      this.homeTeamPlayers.push(teams.home.players[element]);
    });
    awayTeamPlayerIDs.forEach(element => {
      this.awayTeamPlayers.push(teams.away.players[element]);
    });
  }

  triggerSummary() {
    this.showSummary = true;
    this.showOfficials = false;
    this.showPlayers = false;
    this.showIndividualPlayerGameStats = false;
  }

  triggerPlayers(team: string) {
    this.showSummary = false;
    this.showOfficials = false;
    this.showPlayers = true;
    this.showIndividualPlayerGameStats = false;
    this.selectedPlayer = '';
    switch (team) {
      case ('home'): {
       this.selectedTeam = 'home';
       break;
      }
      case ('away'): {
       this.selectedTeam = 'away';
       break;
      }
    }
  }

  triggerOfficials() {
    this.showSummary = false;
    this.showOfficials = true;
    this.showPlayers = false;
    this.showIndividualPlayerGameStats = false;
  }

  triggerContent() {
    if (this.showContent === false) {
    this.showContent = true;
    } else if (this.showContent === true) {
    this.showContent = false;
    }
  }

  triggerIndividualPlayerGameStats(player: any) {
    this.showIndividualPlayerGameStats = true;
    this.selectedPlayer = '';
    this.selectedPlayer = player;
  }
}
