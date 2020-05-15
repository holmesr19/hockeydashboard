import { Component, OnInit } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';
import { TeamRoster } from 'src/app/interfaces/TeamRoster';
import { Team } from 'src/app/interfaces/Team';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  teams: Team[];
  selectedTeam: string;
  teams2: any[] = [
    {name: 'team1'},
    {name: 'team2'},
    {name: 'team3'},
    {name: 'team4'}
  ];
  constructor(private rosterService: RosterService,
              public fb: FormBuilder) {}

  ngOnInit() {
    console.log('in component');
    this.rosterService.getTeams()
    .subscribe((data) => this.teams = data );
    console.log(this.teams);
  }

}
