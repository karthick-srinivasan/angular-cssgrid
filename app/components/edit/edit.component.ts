import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from './../../services/http-service.service';

interface jobResponse {
  id: number;
  name: string;
  link: string;
  color: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  param: string;
  item: jobResponse;
  constructor(private _route: ActivatedRoute, private _http: HttpServiceService) { }

  ngOnInit() {
    this.param = this._route.snapshot.paramMap.get('id');
    this._http.getJob( parseInt( this.param ) )
    .subscribe((data) => this.item = data);
  }

}
