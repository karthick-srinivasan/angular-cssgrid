import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Jobs } from '../jobs';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpServiceService {

  path = `./assets/models/data.json`;
  
  constructor(private _http: Http) { }

  public getJobs(): Observable<any> {
   return this._http.get(this.path)
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getJob(id: number): Observable<any>{
    return this.getJobs()
    .map(data => { return data.find(item => item.id == id); });
  }
}
