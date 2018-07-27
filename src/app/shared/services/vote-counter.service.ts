import { Injectable } from '@angular/core';
import { UserModel } from '../../views/dashboard/models/user.model';
import { GetUsersService } from './get-users.service';
import { Subject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteCounterService {

  counter$: Subject<UserModel[]> = new Subject();

  usersListModel: UserModel[];

  constructor() {

  };

  setListModel(usersListModel: UserModel[]) {
    this.usersListModel = usersListModel;
  };

  setCounter(userVote: UserModel): UserModel[] {

    this.usersListModel.find(user => {
      if (user.login.password === userVote.login.password) {
        ++user.voteCounter;
        return true;
      }
    });

    this.counter$.next(this.usersListModel);
    return this.usersListModel;

  };

}
