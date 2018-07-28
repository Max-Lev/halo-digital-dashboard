import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UppercasePipe } from '../../../../shared/pipes/uppercase.pipe';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  styleUrls: ['./user-details-card.component.scss'],
  providers: [UppercasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsCardComponent implements OnInit, OnChanges {

  @Input() userDetailsModel?: UserModel[] = [];

  userShortDetails: any;

  @Output() cardEventEmitter: EventEmitter<UserModel> = new EventEmitter();

  userData: string;

  constructor(private upperCase: UppercasePipe) { };

  ngOnInit() { };

  ngOnChanges() {
    this.setUserDetailsTemplate();
  };

  setUserDetailsTemplate() {
    if (this.userDetailsModel !== undefined) {
      this.userShortDetails = Object.assign({}, {
        name: {
          data: `${this.upperCase.transform(this.userDetailsModel['name'].first)}  ${this.upperCase.transform(this.userDetailsModel['name'].last)}`,
          isActive: true
        },
        email: {
          data: this.userDetailsModel['email'],
          isActive: false
        },
        birthday: {
          data: this.userDetailsModel['dob'].date,
          isActive: false
        },
        location: {
          data: this.userDetailsModel['location'].street,
          isActive: false
        },
        phone: {
          data: this.userDetailsModel['phone'],
          isActive: false
        },
        password: {
          data: this.userDetailsModel['login'].password,
          isActive: false
        }
      });
    };
  }

  cardDetails(userDetailsModel: UserModel) {
    this.cardEventEmitter.emit(userDetailsModel);
  };

  dataEmitterHandeler(data: string) {
    this.userData = data;
  };


}
