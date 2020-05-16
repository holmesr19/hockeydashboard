import { Component, OnInit } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';
import { TeamRoster } from 'src/app/interfaces/TeamRoster';
import { Team } from 'src/app/interfaces/Team';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Player } from 'src/app/interfaces/Player';
import { Person } from 'src/app/interfaces/Person';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  teams: Team[];
  players: Player[];
  person: Person;
  selectedTeam: string;
  selectedPlayer: string;

  constructor(private rosterService: RosterService,
              public fb: FormBuilder) {}

  ngOnInit() {
    this.rosterService.getTeams()
    .subscribe((data) => this.teams = data );
    console.log(this.teams);
  }

  getRoster(value: string) {
    this.rosterService.getRoster(value)
    .subscribe((data) => this.players = data );
    console.log(this.players);
  }
}
