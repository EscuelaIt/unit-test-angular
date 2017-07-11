import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { User } from './user';

export class MockUsersService{

  getAllUsers(): Observable<User[]>{
    return Observable.of([
      new User('valentina','asas@as.co','asas'),
      new User('nicolas','nicolas@asas.co','asas'),
      new User('zulema','zule@zule.co','asas'),
    ]);
  }

}