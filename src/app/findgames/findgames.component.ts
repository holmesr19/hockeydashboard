import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { GamesService } from 'src/app/services/games.service';
import { GameDates } from 'src/app/interfaces/Game/GameDates';

@Component({
  selector: 'app-findgames',
  templateUrl: './findgames.component.html',
  styleUrls: ['./findgames.component.scss']
})
export class FindgamesComponent implements OnInit {
  startDate: Date;
  endDate: Date;
  gameDates: GameDates[];
  dateForm: FormGroup;

  constructor(private gamesService: GamesService,
              private formBuilder: FormBuilder) {
                this.dateForm = this.formBuilder.group({
                  startDate: '',
                  endDate: ''
                });
               }

  ngOnInit() {
    this.gamesService.getTodaysGames()
    .subscribe(data => this.gameDates = data);
    console.log(this.gameDates);
  }

  getGames(formData: any) {
    // TODO: add a button that triggers this & display the response (also subscribe etc)
    const startDateString = this.formatDate(formData.startDate);
    const endDateString = this.formatDate(formData.endDate);
    console.log(startDateString);
    console.log(endDateString);
    this.gamesService.getGamesByDateRange(startDateString, endDateString)
    .subscribe(data => this.gameDates = data);
    console.log(this.gameDates);
  }

  formatDate(dateStr: Date): string {
    const date = new Date(dateStr);
    return date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') +
    '-' + date.getDate().toString().padStart(2, '0');
  }

}
