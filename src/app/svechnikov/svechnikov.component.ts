import { Component, OnInit } from '@angular/core';
import {SvechnikovService} from './svechnikov.service'
@Component({
  selector: 'app-svechnikov',
  templateUrl: './svechnikov.component.html',
  styleUrls: ['./svechnikov.component.scss']
})
export class SvechnikovComponent implements OnInit {
svech: ISvech;
  constructor(private svechService: SvechnikovService) { }

  ngOnInit() {
    console.log('in svech component');
    this.svechService.getSvech('8480830')
    .subscribe((data) => {this.svech = data;
                          console.log(this.svech)})
  }

}
