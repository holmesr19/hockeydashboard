import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss']
})
export class SingleGameComponent implements OnInit {

  gameId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.gameId = params.get('id');
    });
  }

}
