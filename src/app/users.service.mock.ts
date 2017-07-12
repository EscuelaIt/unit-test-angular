import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Person } from './person';

export class MockUsersService {

 
  getAll():Observable<Person[]>{
    return Observable.of([
      new Person('asas','asas',12,12,12)
    ]);
  }

}