import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Subject } from 'rxjs';

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
