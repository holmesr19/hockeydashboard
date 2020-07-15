import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameDates } from 'src/app/interfaces/Game/GameDates';
import { GameSummary } from 'src/app/interfaces/Game/GameSummary';
import { GamesRes } from 'src/app/interfaces/Game/GamesRes';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }
/*
  getGames(start: string, end: string): Observable<GameSummary[]> {
    return this.httpClient.get<GamesRes>(
    `https://statsapi.web.nhl.com/api/v1/schedule?startDate=` + `${start}` + `&endDate=` + `${end}`)
    .pipe(map(data => this.transformToGames(data)));
  }

  transformToGames(response: GamesRes): GameSummary[] {
    const games = new Array<GameSummary>();
    response.dates.forEach(element => {
      console.log(element);
      games.push(element.games);
    });
    return games;
  }*/
}
