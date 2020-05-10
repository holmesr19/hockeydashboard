import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamRoster } from 'src/app/interfaces/TeamRoster';
import { Observable, of } from 'rxjs';
// import { link } from 'fs';
import { map } from 'rxjs/operators';
import { Player } from 'src/app/interfaces/Player';
import { Team } from 'src/app/interfaces/team';
import { TeamRes } from 'src/app/interfaces/teamres';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  constructor(private httpClient: HttpClient) { }

getTeams(): Observable<Team[]> {
  return this.httpClient.get<TeamRes>(
  `https://statsapi.web.nhl.com/api/v1/teams/`
  ).pipe(map(data => data.teams));
}
getRoster(teamID: string): Observable<Player[]> {
  return this.httpClient.get<TeamRoster>(
  `https://statsapi.web.nhl.com/api/v1/teams/` + `${teamID}` + `/roster`
  ).pipe(map(data => data.roster));
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
