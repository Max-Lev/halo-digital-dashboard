import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnChanges, Input } from '@angular/core';
import { GetUsersService } from '../../../../shared/services/get-users.service';
import { UserModel } from '../../models/user.model';
import { Router, RouterEvent, NavigationEnd, ActivatedRoute } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit, AfterViewInit, OnChanges {

  userDetailsModel: UserModel;

  constructor(private getUsersService: GetUsersService, private ref: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute, private router: Router) {

  };

  ngOnInit() {
    this.setActiveUser();
  };

  ngAfterViewInit(): void {

  };

  ngOnChanges() {

  };

  setActiveUser() {
    this.getUsersService.selectedUser$.subscribe((user: UserModel) => {
      if (user !== null) {
        this.userDetailsModel = user;
        this.ref.markForCheck();
      }
      return user;
    });
  };

  cardEventEmitterHandler(userModel: UserModel) {
    this.router.navigate([`dashboard/${userModel.login.password}`]);
  };

}
