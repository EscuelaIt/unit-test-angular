import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  path: string = 'http://jsonplaceholder.typicode.com/users';

  constructor(
    private http: Http
  ) { }

  getUser(id: number): Observable<any>{
    return this.http.get(`${this.path}/${id}`, this.makeRequestOptions())
    .map(response => response.json());
  }

  createUser(newUser: any){
    let body = JSON.stringify(newUser);
    return this.http.post(`${this.path}`, body, this.makeRequestOptions())
    .map(response => response.json());
  }

  updateUser(user: any){
    let id = user.id;
    let body = JSON.stringify(user);
    return this.http.put(`${this.path}/${id}`, body, this.makeRequestOptions())
    .map(response => response.json());  
  }

  deleteUser(id: number){
    return this.http.delete(`${this.path}/${id}`, this.makeRequestOptions())
    .map(response => response.json());
  }

  makeRequestOptions(): RequestOptionsArgs{
    let headers = new Headers();
    headers.append('API-TOKEN', 'xxxyyy');
    return {
      headers: headers
    };
  }

}
