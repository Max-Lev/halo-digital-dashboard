import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { GetUsersService } from '../../../../shared/services/get-users.service';
import { UserModel } from '../../models/user.model';
import { Router } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit, AfterViewInit {

  usersListModel: UserModel[] = [];

  userDetailsModel: UserModel;

  constructor(private getUsersService: GetUsersService, private ref: ChangeDetectorRef, private router: Router) {

  };

  ngOnInit() {

  };

  ngAfterViewInit(): void {
    this.loadUsers$$();
  };

  loadUsers$$() {
    this.getUsersService.getUsers(3).subscribe(((data: any) => {
      this.usersListModel = data.map(item => { return new UserModel(item.results[0]); });
      this.userDetailsModel = this.usersListModel[0];
      this.ref.detectChanges();
      return data;
    }));
  };

  selectedUserHandler(user: UserModel) {
    const selectedUser: UserModel = this.usersListModel.find(item => item.phone === user.phone);
    this.userDetailsModel = selectedUser;
    this.ref.detectChanges();
  };

  cardEventEmitterHandler(userModel: UserModel) {
    // debugger;
    this.router.navigateByUrl(`dashboard/${userModel.login.password}`)//, { relativeTo: route, skipLocationChange: true });
    // debugger;
  };

}
