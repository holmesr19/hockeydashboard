import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SvechnikovService {

  constructor(private httpClient: HttpClient) { }


// Svech's ID: 8480830
getSvech(playerID: string): Observable<ISvech> {
  // get an observable ICurrentSvech from nhl api and give observable ISvech to component
  console.log('getting svech from api');
  console.log(this.httpClient.get<ICurrentSvech>(
    `https://statsapi.web.nhl.com/api/v1/people/` + `${playerID}` + `/stats?stats=yearByYear`
    ).pipe(map(data => this.transformToISvech(data))));
  return this.httpClient.get<ICurrentSvech>(
    `https://statsapi.web.nhl.com/api/v1/people/` + `${playerID}` + `/stats?stats=yearByYear`
  ).pipe(map(data => this.transformToISvech(data)));
}

transformToISvech(svech: ICurrentSvech): ISvech {

}

}
