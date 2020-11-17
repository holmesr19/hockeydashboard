import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from 'src/app/interfaces/Team';
import { Player } from 'src/app/interfaces/Player';
import { PersonExtended } from 'src/app/interfaces/PersonExtended';
import { StatsObj } from 'src/app/interfaces/StatsObj';

@Injectable({
  providedIn: 'root'
})
export class HistoricalPlayerService {

  constructor() { }

  getYears(): Observable<string[]> {
    return of(['19171918']);
  }
  getTeams(year: string): Observable<Team[]> {}

  getRoster(year: string, teamId: string): Observable<Player[]> {}

  getPlayer(playerId: string): Observable<PersonExtended> {}

  getYearlyData(playerId: string, year: string): Observable<StatsObj[]> {}
}
