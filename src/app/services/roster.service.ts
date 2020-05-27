import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamRoster } from 'src/app/interfaces/TeamRoster';
import { Observable, of } from 'rxjs';
// import { link } from 'fs';
import { map } from 'rxjs/operators';
import { Player } from 'src/app/interfaces/Player';
import { Team } from 'src/app/interfaces/Team';
import { TeamRes } from 'src/app/interfaces/TeamRes';
import { Person } from 'src/app/interfaces/Person';
import { PersonRes } from 'src/app/interfaces/PersonRes';
import { PersonExtended } from 'src/app/interfaces/PersonExtended';
import { StatsObj } from 'src/app/interfaces/StatsObj';
import { StatsRes } from 'src/app/interfaces/StatsRes';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

constructor(private httpClient: HttpClient) { }

getTeams(): Observable<Team[]> {
  return this.httpClient.get<TeamRes>(
  `https://statsapi.web.nhl.com/api/v1/teams/`
  ).pipe(map(data => this.transformToTeams(data))
  );
}

getRoster(teamID: string): Observable<Player[]> {
  return this.httpClient.get<TeamRoster>(
  `https://statsapi.web.nhl.com/api/v1/teams/` + `${teamID}` + `/roster`
  ).pipe(map(data => data.roster));
}

getPlayer(playerId: string): Observable<PersonExtended> {
  return this.httpClient.get<PersonRes>(
  `https://statsapi.web.nhl.com/api/v1/people/` + `${playerId}`
  ).pipe(map(data => data.people[0]));
}

getYearlyData(playerId: string): Observable<StatsObj[]> {
  return this.httpClient.get<StatsRes>(
    `https://statsapi.web.nhl.com/api/v1/people/` + `${playerId}` + `/stats?stats=yearByYear`
    ).pipe(map(data => data.stats[0].splits));
}

private transformToTeams(data: TeamRes): Team[] {
    return data.teams;
  }

// // this is where i'm at in the book
// private transformToIRoster(response: ICurrentRoster ): IRoster {
//   console.log(response);
//   // let players: new IPlayer[];
//   for (const i of response.roster) {
//     console.log(i);
//   }
//   return {
//     players: [
//       {
//         playerName: response.roster[0].person.fullName,
//         number: response.roster[0].jerseyNumber,
//         position: response.roster[0].position.abbreviation,
//         link: response.roster[0].person.link
//       }
//     ]
//   };
// }
}
