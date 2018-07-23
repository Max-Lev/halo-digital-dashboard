import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetUsersService } from './shared/services/get-users.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AppRouterModule } from './app-router/app-router.module';
import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    RouterModule,
  ],
  providers: [
    GetUsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
