import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRoster, IPlayer } from '../interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { link } from 'fs';
import { map } from 'rxjs/operators';


interface ICurrentRoster {
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
}
@Injectable({
  providedIn: 'root'
})
export class RosterService {

  constructor(private httpClient: HttpClient) { }

getRoster(teamID: string): Observable<ICurrentRoster> {
  return this.httpClient.get<ICurrentRoster>(
  `https://statsapi.web.nhl.com/api/v1/teams/` + `${teamID}` + `/roster`
  ).pipe(map(data => this.transformToIRoster(data)));
}

// this is where i'm at in the book
private transformToIRoster(response: ICurrentRoster ): IRoster {
  console.log(response.roster);
  return {
    // cast the stuff that comes in from nhl api (in the shape specified above)
    // into the shape I want it, which is in interfaces/IRoster
    players: response.roster
  };
}
}

