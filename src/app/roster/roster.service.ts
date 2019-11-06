import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRosterResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  constructor(private httpClient: HttpClient) { }

getRoster(teamID: string) {
  return this.httpClient.get<IRosterResponse>(
  `https://statsapi.web.nhl.com/api/v1/teams/` + `${teamID}` + `/roster`
  );
}
}

