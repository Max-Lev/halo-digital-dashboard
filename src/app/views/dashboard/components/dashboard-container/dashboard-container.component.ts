import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { GetUsersService } from '../../../../shared/services/get-users.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit, AfterViewInit {

  users: any[] = [];

  constructor(private getUsersService: GetUsersService, private ref: ChangeDetectorRef) { 
    console.log('dashboardContainer')
  }

  ngOnInit() {

  };

  ngAfterViewInit(): void {

    this.getUsersService.getUsers(3).subscribe(((data) => {
      console.log(data);
      this.users = data;
      return data;
    }));

  };

}
