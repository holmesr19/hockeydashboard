import { Component, OnInit } from '@angular/core';
import { IRoster } from '../interfaces';
import { RosterService } from 'src/app/roster/roster.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
roster: IRoster;
  constructor(private rosterService: RosterService) {}

  ngOnInit() {
    console.log('in component');
    this.rosterService.getRoster('12')
    .subscribe((data) => {this.roster = data;
                          console.log(this.roster); });
  }

}
