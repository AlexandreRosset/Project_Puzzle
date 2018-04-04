import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class ProjectsService {

  constructor(
    private http: Http,
    private Auth: AuthenticationService
  ) { }

  getProjects(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let routeProjects = 'http://localhost:3000/api/projects';
    return this.http.get(routeProjects, {headers : headers})
      .map((response: Response) => response)
      .catch(this.Auth.handleError);
  }
}
