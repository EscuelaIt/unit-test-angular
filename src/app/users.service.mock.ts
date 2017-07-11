import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/of';

import { User } from './user';

export class MockUsersService{

  getAllUser(): Observable<User[]>{
    return Observable.of([
      new User('valentina','asas','asas')
    ]);
  }

}