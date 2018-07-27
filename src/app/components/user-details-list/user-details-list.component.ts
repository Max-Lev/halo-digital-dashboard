import { Component, OnInit, Input, EventEmitter, Output, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { UserModel } from '../../views/dashboard/models/user.model';

@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styleUrls: ['./user-details-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserDetailsListComponent implements OnInit, OnChanges {

  @Input() usersListModel: UserModel;

  @Output() selectedUserEmitter: EventEmitter<UserModel> = new EventEmitter();

  constructor() { };

  ngOnInit() {

  };

  ngOnChanges() {

  };

  selectedUser(user: UserModel) {
    this.selectedUserEmitter.emit(user);
  };

} 
