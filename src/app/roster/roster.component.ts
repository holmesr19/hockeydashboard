import { Component, OnInit, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';
import { TeamRoster } from 'src/app/interfaces/TeamRoster';
import { Team } from 'src/app/interfaces/Team';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Player } from 'src/app/interfaces/Player';
import { Person } from 'src/app/interfaces/Person';
import { PersonExtended } from 'src/app/interfaces/PersonExtended';
import { StatsObj } from 'src/app/interfaces/StatsObj';
import * as d3 from 'd3';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit, OnChanges {
  teams: Team[];
  players: Player[];
  showPlayerCards: boolean;
  person: Person;
  selectedTeam: string;
  selectedPlayer: Player;
  selectedSeason: string;
  playerProfile: PersonExtended;
  years: string[];
  nyears: number;
  yearlyStats: any[];
  private chartContainer: ElementRef;
  margin = {top: 20, right: 20, bottom: 30, left: 40};

  constructor(private rosterService: RosterService,
              public fb: FormBuilder) {}

  ngOnInit() {
    this.showPlayerCards = false;
    this.rosterService.getTeams()
    .subscribe((data) => this.teams = data );
  }

  ngOnChanges() {
    if (!this.yearlyStats) { return; }

    this.createChart();
  }

  getRoster(value: string) {
    this.showPlayerCards = false;
    this.selectedSeason = '';
    this.rosterService.getRoster(value)
    .subscribe((data) => this.players = data );
  }

  getProfile(value: string) {
    this.selectedSeason = '';
    this.rosterService.getPlayer(value)
    .subscribe((data) => this.playerProfile = data );
    this.showPlayerCards = true;
    this.rosterService.getYearlyData(value)
    .subscribe((data) => this.yearlyStats = data );
    // console.log(this.getnyears(this.yearlyStats));
  }

/*   getnyears(seasons: any[]): number {
    return seasons.length;
  } */

  showMoreStats(season: string) {
    console.log(season);
  }

  createChart() {
    d3.select('#ppgchart');

    const element = this.chartContainer.nativeElement;
    const data = this.yearlyStats;
    const n = 21;

    const svg = d3.select(element).append('svg')
        .attr('width', element.offsetWidth)
        .attr('height', element.offsetHeight);

    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;

    const x = d3
      .scaleLinear()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain([0, n - 1]);

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, d => d.frequency)]);

    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x));

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10, '%'))
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Frequency');

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.season))
        .attr('y', d => y(d.stat.points))
        .attr('width', x.bandwidth())
        .attr('height', d => contentHeight - y(d.frequency));
  }


  // getYears(annuals: StatsObj[]): string[] {
  //   let playerYears = [];
  //   for (let i in annuals) {
  //   console.log(i);
  //   }
  //   return playerYears;
  //   }

//  }
}
