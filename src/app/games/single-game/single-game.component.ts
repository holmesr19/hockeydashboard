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

  triggerPlayers() {
    this.showSummary = false;
    this.showOfficials = false;
    this.showPlayers = true;
    this.showContent = false;
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

}
