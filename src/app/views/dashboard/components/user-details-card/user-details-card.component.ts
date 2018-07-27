import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  styleUrls: ['./user-details-card.component.scss']
})
export class UserDetailsCardComponent implements OnInit, OnChanges {

  @Input() userDetailsModel?: UserModel[] = [];

  @Output() cardEventEmitter: EventEmitter<UserModel> = new EventEmitter();

  constructor() { };

  ngOnInit() {

  };

  ngOnChanges() {
    console.log(this.userDetailsModel)
  };

  cardDetails(userDetailsModel: UserModel) {
    this.cardEventEmitter.emit(userDetailsModel);
  };

}
