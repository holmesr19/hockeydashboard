import { Component, OnInit } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';
import { TeamRoster } from 'src/app/interfaces/TeamRoster';
import { Team } from 'src/app/interfaces/Team';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Player } from 'src/app/interfaces/Player';
import { Person } from 'src/app/interfaces/Person';
import { PersonExtended } from 'src/app/interfaces/PersonExtended';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  teams: Team[];
  players: Player[];
  showPlayerCards: boolean;
  person: Person;
  selectedTeam: string;
  selectedPlayer: Player;
  playerProfile: PersonExtended;

  constructor(private rosterService: RosterService,
              public fb: FormBuilder) {}

  ngOnInit() {
    this.showPlayerCards = false;
    this.rosterService.getTeams()
    .subscribe((data) => this.teams = data );
  }

  getRoster(value: string) {
    this.showPlayerCards = false;
    this.rosterService.getRoster(value)
    .subscribe((data) => this.players = data );
  }

  getProfile(value: string) {
    this.rosterService.getPlayer(value)
    .subscribe((data) => this.playerProfile = data );
    this.showPlayerCards = true;
  }
}
