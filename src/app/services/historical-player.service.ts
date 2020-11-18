import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from 'src/app/interfaces/Team';
import { Player } from 'src/app/interfaces/Player';
import { PersonExtended } from 'src/app/interfaces/PersonExtended';
import { StatsObj } from 'src/app/interfaces/StatsObj';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { TeamRes } from 'src/app/interfaces/TeamRes';
import { TeamRoster } from 'src/app/interfaces/TeamRoster';
import { PlayerStats } from 'src/app/interfaces/PlayerStats';
import { PersonRes } from 'src/app/interfaces/PersonRes';

@Injectable({
  providedIn: 'root'
})
export class HistoricalPlayerService {

  constructor(private httpClient: HttpClient) { }

  getYears(): Observable<string[]> {
    let firstYear = 1917;
    let secondYear = 1918;
    const years = [];
    const thisYear = new Date().getFullYear();
    while (firstYear < thisYear) {
      years.push(firstYear.toString() + secondYear.toString());
      firstYear = secondYear;
      secondYear++;
    }
    return of(years);
  }
  getTeams(year: string): Observable<Team[]> {
    return this.httpClient.get<TeamRes>(
      `https://statsapi.web.nhl.com/api/v1/teams?season=` + `${year}`
    ).pipe(map(data => data.teams));
  }

  getRoster(year: string, teamId: string): Observable<Player[]> {
    return this.httpClient.get<TeamRoster>(
      `https://statsapi.web.nhl.com/api/v1/teams/` + `${teamId}` + `?expand=team.roster&season=` + `${year}`
    ).pipe(map(data => data.roster));
  }

  getPlayer(playerId: string): Observable<PersonExtended> {
    return this.httpClient.get<PersonRes>(
      `https://statsapi.web.nhl.com/api/v1/` + `${playerId}`
    ).pipe(map(data => data.people[0]));
  }

  getYearlyData(playerId: string, year: string): Observable<PlayerStats> {

  }
}
