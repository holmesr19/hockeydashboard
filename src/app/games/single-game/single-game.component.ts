import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { BoxScore } from 'src/app/interfaces/Game/GamesRes';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss']
})
export class SingleGameComponent implements OnInit {

  gameId: string;
  gameData: BoxScore;

  constructor(private activatedRoute: ActivatedRoute,
              private gameService: GamesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.gameId = params.get('id');
    });
    this.gameService.getGameBoxScore(this.gameId)
    .subscribe(data => this.gameData = data);
  }

}
