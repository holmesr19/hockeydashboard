import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-findgames',
  templateUrl: './findgames.component.html',
  styleUrls: ['./findgames.component.scss']
})
export class FindgamesComponent implements OnInit {
  startDate: Date;
  endDate: Date;
  picker = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    this.startDate = today;
    this.endDate = tomorrow;
    // console.log(today.getDate());
    // console.log(today.getMonth() + 1);
    // console.log(today.getFullYear());
    console.log('start: ' + this.formatDate(this.startDate));
    console.log('end: ' + this.formatDate(this.endDate));
  }

  getGames(value: string) {
    // TODO: add a button that triggers this & display the response (also subscribe etc)
    this.gamesService.getGames(this.formatDate(this.startDate), this.formatDate(this.endDate));
  }

  formatDate(date: Date): string {
    return date.getFullYear().toString() + '-' + (date.getMonth() + 1) + '-' + date.getDate().toString();
  }

}
