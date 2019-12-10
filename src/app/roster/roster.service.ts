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
/*
interface IPlayer {
  person: {},
  jerseyNumber: {},
  position: {}
}*/
@Injectable({
  providedIn: 'root'
})
export class RosterService {

  constructor(private httpClient: HttpClient) { }

getRoster(teamID: string): Observable<IRoster> {
  console.log(this.httpClient.get<ICurrentRoster>(
    `https://statsapi.web.nhl.com/api/v1/teams/` + `${teamID}` + `/roster`
    ).pipe(map(data => this.transformToIRoster(data))));
  return this.httpClient.get<ICurrentRoster>(
  `https://statsapi.web.nhl.com/api/v1/teams/` + `${teamID}` + `/roster`
  ).pipe(map(data => this.transformToIRoster(data)));
}

// this is where i'm at in the book
private transformToIRoster(response: ICurrentRoster ): IRoster {
  // console.log(response.roster);
  // new CurrentRoster: IRoster = {players: [{playerName: response.roster[0].person.fullName, number: '12', position: '12', link: '12'}]};
  /*for (var i = 0; i < response.roster.length; i++) {
    CurrentRoster.player[i].playerName = response.roster[i].person.fullName,
    CurrentRoster.player[i].position = response.roster[i].position.abbreviation,
    CurrentRoster.player[i].number = response.roster[i].jerseyNumber,
    CurrentRoster.player[i].link = response.roster[i].person.link; }*/
  console.log(response);
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
