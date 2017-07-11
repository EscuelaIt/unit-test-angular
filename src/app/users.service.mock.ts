import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Person } from './person';

export class MockUsersService {

  getAll():Observable<Person[]>{
    return Observable.of([
      {
        name: 'nicolas',
        lastname: 'molina'
      },
      {
        name: 'zulema',
        lastname: 'molina'
      }
    ])
  }
}