import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { BoxScore, Official } from 'src/app/interfaces/Game/GamesRes';

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

  constructor(private activatedRoute: ActivatedRoute,
              private gameService: GamesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.gameId = params.get('id');
    });
    this.gameService.getGameBoxScore(this.gameId)
    .subscribe(data => this.gameData = data);
  }

  triggerSummary() {
    this.showSummary = true;
    this.showOfficials = false;
    this.showPlayers = false;
    this.showContent = false;
  }

  triggerPlayers(team: string) {
    this.showSummary = false;
    this.showOfficials = false;
    this.showPlayers = true;
    this.showContent = false;
    let selectedTeamPlayerIds = [];
    let selectedTeam;
    this.selectedTeamPlayers = [];
    switch (team) {
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
    console.log(this.selectedTeamPlayers);
  }

  triggerOfficials() {
    this.showSummary = false;
    this.showOfficials = true;
    this.showPlayers = false;
    this.showContent = false;
  }

  triggerContent() {
    this.showSummary = false;
    this.showOfficials = false;
    this.showPlayers = false;
    this.showContent = true;
  }

  triggerIndividualPlayerGameStats(player: any) {
    console.log('should show players');
    this.showIndividualPlayerGameStats = true;
    this.selectedPlayer = player;
    console.log(this.selectedPlayer);
    console.log(player);
}
}
