import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GameDates } from "src/app/interfaces/Game/GameDates";
import { GameSummary } from "src/app/interfaces/Game/GameSummary";
import { GamesRes, BoxScore } from "src/app/interfaces/Game/GamesRes";

@Injectable({
  providedIn: "root",
})
export class GamesService {
  constructor(private httpClient: HttpClient) {}

  getTodaysGames(): Observable<GameDates[]> {
    const today = new Date();
    const todayStr =
      today.getFullYear().toString() +
      "-" +
      (today.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      today.getDate().toString().padStart(2, "0");
    return this.getGamesByDateRange(todayStr, todayStr);
  }

  getGamesByDateRange(start: string, end: string): Observable<GameDates[]> {
    return this.httpClient
      .get<any>(
        `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${start}&endDate=${end}`
      )
      .pipe(map((data) => data.dates));
  }

  getGameContent(gameId: string) {
    // I think we should use this one but it doesnt have media
    // https://statsapi.web.nhl.com/api/v1/game/1917020001/feed/live
  }

  getGameBoxScore(gameId: string): Observable<BoxScore> {
    return this.httpClient.get<any>(
      `https://statsapi.web.nhl.com/api/v1/game/${gameId}/boxscore`
    );
  }

  getGameOfficials(gameId: string): Observable<BoxScore> {
    return this.httpClient
      .get<any>(`https://statsapi.web.nhl.com/api/v1/game/${gameId}/boxscore`)
      .pipe(map((data) => data.officials));
  }
}
