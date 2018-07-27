import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { UserModel } from '../../views/dashboard/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  users$: Subject<any> = new Subject();

  usersList: any[] = [];

  selectedUser$: BehaviorSubject<any> = new BehaviorSubject(null);

  activeUser: UserModel;

  constructor(private http: HttpClient) { };

  getUsers(amount: number): Observable<any> {

    const dataCollector: any[] = [];

    new Array(amount).fill(amount).map((item, index) => {

      this.http.get('https://randomuser.me/api/').subscribe((data) => {

        dataCollector.push(data);

        if ((amount) === dataCollector.length) {
          this.usersList = dataCollector;
          this.users$.next(dataCollector);
          this.users$.complete();
        };

        return data;
      });

    });

    return this.users$;

  };


  setSelectedUser(userDetailsModel: UserModel) {
    this.activeUser = userDetailsModel;
    this.selectedUser$.next(userDetailsModel);
  };




}
