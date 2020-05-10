import { Component, OnInit } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';
import { TeamRoster } from 'src/app/interfaces/TeamRoster';
import { Team } from 'src/app/interfaces/Team';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  team: Team;
  roster: TeamRoster;

  constructor(private rosterService: RosterService) {}

  ngOnInit() {
    console.log('in component');
    this.rosterService.getRoster('12')
    .subscribe((data) => {this.roster = data;
                          console.log(this.roster); });
  }

}
