import { Component, OnInit } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';
import { TeamRoster } from 'src/app/interfaces/TeamRoster';
import { Team } from 'src/app/interfaces/Team';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  teams: Team[];
  roster: TeamRoster;
  // teamControl = new FormControl('', Validators.required);
  constructor(private rosterService: RosterService,
              public fb: FormBuilder) {}

  ngOnInit() {
    console.log('in component');
    this.rosterService.getTeams()
    .subscribe((data) => this.teams = data );
    console.log(this.teams);
  }

}
