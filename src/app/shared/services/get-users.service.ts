import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from '../../../../node_modules/rxjs';
import { Subject } from '../../../../node_modules/rxjs';
import { BehaviorSubject, interval, from } from '../../../../node_modules/rxjs';
import { mergeMap, switchMap, repeat, merge, combineAll, combineLatest, take, map, concat } from 'rxjs/operators';
import * as Rx from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  users$: Subject<any> = new Subject();

  constructor(private http: HttpClient) {

  };

  getUsers(amount: number): Observable<any> {

    const dataCollector: any[] = [];

    new Array(amount).fill(amount).map((item, index) => {

      this.http.get('https://randomuser.me/api/').subscribe((data) => {

        dataCollector.push(data);

        if ((amount) === dataCollector.length) {
          this.users$.next(dataCollector);
          this.users$.complete();
        };

        return data;
      });

    });

    return this.users$;

  };






}
