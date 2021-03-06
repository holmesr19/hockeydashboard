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
  selectedTeamPlayers: any[];
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
    // let selectedTeamPlayerIds = [];
    // let selectedTeam;
    this.selectedTeamPlayers = [];
/*     switch (team) {
      case ('home'): {
        console.log(team + 'players');
        selectedTeam = this.gameData.teams.home;
        selectedTeamPlayerIds = Object.getOwnPropertyNames(selectedTeam.players);
        break;
      }
      case ('away'): {
        console.log(team + 'players');
        selectedTeam = this.gameData.teams.away;
        selectedTeamPlayerIds = Object.getOwnPropertyNames(selectedTeam.players);
        break;
      }
    }
    selectedTeamPlayerIds.forEach(element => {
      this.selectedTeamPlayers.push(selectedTeam.players[element]); // will be upadted
    });
    console.log(this.selectedTeamPlayers); */
  }

  triggerOfficials() {
    this.showSummary = false;
    this.showOfficials = true;
    this.showPlayers = false;
    this.showIndividualPlayerGameStats = false;
  }

  triggerContent() {
    if (this.showContent === false) {
    console.log('content');
    this.showContent = true;
    } else if (this.showContent === true) {
    this.showContent = false;
    }
  }

  triggerIndividualPlayerGameStats(player: any) {
    this.showIndividualPlayerGameStats = true;
    this.selectedPlayer = player;
}
}
