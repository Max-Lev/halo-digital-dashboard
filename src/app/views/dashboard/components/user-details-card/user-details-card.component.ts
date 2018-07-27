import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  styleUrls: ['./user-details-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsCardComponent implements OnInit, OnChanges {

  @Input() userDetailsModel?: UserModel[] = [];

  @Output() cardEventEmitter: EventEmitter<UserModel> = new EventEmitter();

  constructor() { };

  ngOnInit() {

  };

  ngOnChanges() {
    
  };

  cardDetails(userDetailsModel: UserModel) {
    this.cardEventEmitter.emit(userDetailsModel);
  };



}
