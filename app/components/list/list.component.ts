import { Component, OnInit } from '@angular/core';
import {Jobs} from './../../jobs';
import { HttpServiceService } from './../../services/http-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  jobs: Array<Jobs> = [];
  textSize: string = '20px';
  columnCount: number = 4;
  constructor(private _httpService: HttpServiceService) { }

  ngOnInit() {
    this._httpService.getJobs()
    .subscribe((data) => {
      this.jobs = data;
    });
  }

  textScale(e) {
    this.textSize = (e * 5)+'px';
  }

  columnChange(e) {
    this.columnCount = e;
  }

}
