import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GamesService } from 'src/app/services/games.service';
import { GameDates } from 'src/app/interfaces/Game/GameDates';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  startDate: Date;
  endDate: Date;
  gameDates: GameDates[];
  dateForm: FormGroup;
  initialSearch = true;
  error: any = {isError: false, errorMessage: ''};

  constructor(private gamesService: GamesService,
              private formBuilder: FormBuilder,
              private router: Router) {
                this.dateForm = this.formBuilder.group({
                  startDate: ['', [Validators.required]],
                  endDate: ['', [Validators.required]]
                });
               }

  ngOnInit() {
    this.gamesService.getTodaysGames()
    .subscribe(data => this.gameDates = data);
  }

  getGames(formData: any) {
    // TODO: add a button that triggers this & display the response (also subscribe etc)
    if (new Date(this.dateForm.controls.endDate.value) < new Date(this.dateForm.controls.startDate.value)) {
      this.error = {isError: true, errorMessage: 'End Date can not be earlier than start date'};
    } else {
    this.error = {isError: false, errorMessage: ''};
    const startDateString = this.formatDate(formData.startDate);
    const endDateString = this.formatDate(formData.endDate);
    this.gamesService.getGamesByDateRange(startDateString, endDateString)
    .subscribe(data => this.gameDates = data);
    this.initialSearch = false;
  }
  }

  formatDate(dateStr: Date): string {
    const date = new Date(dateStr);
    return date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') +
    '-' + date.getDate().toString().padStart(2, '0');
  }

}
