import { Component, OnInit } from '@angular/core';
import { IRosterResponse } from '../interfaces';
import { RosterService } from 'src/app/roster/roster.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
rosterResponse: IRosterResponse;
  constructor(private rosterService: RosterService) {}

  ngOnInit() {
    this.rosterService.getRoster('12')
    .subscribe((data) => this.rosterResponse = data);
  }

}
