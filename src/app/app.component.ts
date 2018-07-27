import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { UserModel } from './views/dashboard/models/user.model';
import { GetUsersService } from './shared/services/get-users.service';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '../../node_modules/@angular/router';
import { VoteCounterService } from './shared/services/vote-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  usersListModel: UserModel[] = [];

  userDetailsModel: UserModel;

  constructor(private getUsersService: GetUsersService, private ref: ChangeDetectorRef,
    private activeRoute: ActivatedRoute, private router: Router, private votesService: VoteCounterService) {

  };

  ngOnInit(): void {

  };

  ngAfterViewInit(): void {
    this.loadUsers$$();
    this.modelVoteUpdate$();
  };

  modelVoteUpdate$() {
    this.votesService.counter$.subscribe((list: UserModel[]) => {
      this.usersListModel = list.map(item => new UserModel(item));
      this.ref.detectChanges();
      return list;
    });
  };

  loadUsers$$() {

    this.getUsersService.getUsers(3).subscribe(((data: any) => {

      this.usersListModel = data.map(item => { return new UserModel({ ...item.results[0] }); });

      this.userDetailsModel = this.usersListModel[0];

      this.getUsersService.setSelectedUser(this.userDetailsModel);

      this.votesService.setListModel(this.usersListModel);

      this.ref.detectChanges();
      return data;
    }));

  };

  selectedUserHandler(user: UserModel) {
    const selectedUser: UserModel = this.usersListModel.find(item => item.phone === user.phone);
    
    this.userDetailsModel = selectedUser;

    this.getUsersService.setSelectedUser(this.userDetailsModel);

    this.ref.detectChanges();
  };



}
