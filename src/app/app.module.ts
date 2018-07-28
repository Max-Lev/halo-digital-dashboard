import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppComponent } from './app.component';
import { GetUsersService } from './shared/services/get-users.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './app-router/app-router.module';
import { RouterModule } from '@angular/router';
import { UserDetailsListComponent } from './components/user-details-list/user-details-list.component';
import { MatListModule } from '../../node_modules/@angular/material/list';
import { VoteCounterService } from './shared/services/vote-counter.service';
import { UppercasePipe } from './shared/pipes/uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsListComponent,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    RouterModule,
    MatListModule,
  ],
  providers: [
    GetUsersService,
    VoteCounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
