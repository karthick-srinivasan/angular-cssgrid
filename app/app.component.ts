import { Component, OnInit } from '@angular/core';
import {Jobs} from './jobs';
import { HttpServiceService } from './services/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    console.log(this.textSize);
  }

  columnChange(e) {
    this.columnCount = e;
    console.log(this.columnCount);
  }
}
