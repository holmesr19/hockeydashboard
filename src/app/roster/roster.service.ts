import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRoster, IPlayer } from '../interfaces';
import { Observable } from 'rxjs/internal/Observable';
// import { link } from 'fs';
import { map } from 'rxjs/operators';


interface ICurrentRoster {
  copyright: string;
  roster: [{
    person: {
      id: number,
      fullName: string,
      link: string
    },
    jerseyNumber: string,
    position: {
      code: string,
      name: string,
      type: string,
      abbreviation: string
    }
  }
  ];
  link: string;
}

interface IPlayer {
  playerName: string;
  number: string;
  position: string;
  link: string;
}
@Injectable({
  providedIn: 'root'
})
export class RosterService {

  constructor(private httpClient: HttpClient) { }

getRoster(teamID: string): Observable<IRoster> {
  console.log('getting from api');
  console.log(this.httpClient.get<ICurrentRoster>(
    `https://statsapi.web.nhl.com/api/v1/teams/` + `${teamID}` + `/roster`
    ).pipe(map(data => this.transformToIRoster(data))));
  return this.httpClient.get<ICurrentRoster>(
  `https://statsapi.web.nhl.com/api/v1/teams/` + `${teamID}` + `/roster`
  ).pipe(map(data => this.transformToIRoster(data)));
}

// this is where i'm at in the book
private transformToIRoster(response: ICurrentRoster ): IRoster {
  console.log(response);
  // let players: new IPlayer[];
  for (const i of response.roster) {
    console.log(i);
  }
  return {
    players: [
      {
        playerName: response.roster[0].person.fullName,
        number: response.roster[0].jerseyNumber,
        position: response.roster[0].position.abbreviation,
        link: response.roster[0].person.link
      }
    ]
  };
}
}
