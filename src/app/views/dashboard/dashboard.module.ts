import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { Routes, RouterModule } from '../../../../node_modules/@angular/router';
import { UserDetailsContainerComponent } from './components/user-details-container/user-details-container.component';

const routes: Routes = [
  {
    path: '', component: DashboardContainerComponent,
    children: [
      {
        path: ':id', component: UserDetailsContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardContainerComponent,
    UserDetailsContainerComponent]
})
export class DashboardModule { }
