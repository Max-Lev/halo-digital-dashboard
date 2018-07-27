import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { GetUsersService } from '../../../../shared/services/get-users.service';
import { Router, ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { VoteCounterService } from '../../../../shared/services/vote-counter.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() userDetailsModel: UserModel;

  constructor(private getUsersService: GetUsersService,
    private voteCounterService: VoteCounterService,
    private router: Router, private activatedRoute: ActivatedRoute) {

  };

  ngOnInit() {

    this.getUsersService.selectedUser$.subscribe((user: UserModel) => {
      if (user !== null) {
        this.userDetailsModel = user;
        this.activatedRoute.params.subscribe(data => {
          if (data['id'] !== user.login.password) {
            this.router.navigate(['dashboard']);
          }
        });
      };
      return user;
    });

  };


  vote(userDetailsModel: UserModel) {
    this.voteCounterService.setCounter(userDetailsModel);
  };



}


