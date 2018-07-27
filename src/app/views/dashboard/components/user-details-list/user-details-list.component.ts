import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserModel } from '../../models/user.model';


@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styleUrls: ['./user-details-list.component.scss']
})
export class UserDetailsListComponent implements OnInit {

  @Input() usersListModel: UserModel;

  @Output() selectedUserEmitter: EventEmitter<UserModel> = new EventEmitter();

  constructor() { };

  ngOnInit() {

  };

  selectedUser(user: UserModel) {
    console.log('selected: ', user);
    this.selectedUserEmitter.emit(user);
  };

} 
