import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  path: string = 'http://jsonplaceholder.typicode.com/users';

  constructor(
    private http: Http
  ) {}

  getUser(id: number): Observable<any>{
    return this.http.get(`${this.path}/${id}`)
    .map(response => response.json());
  }

}
