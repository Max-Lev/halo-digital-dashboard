import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsListComponent } from './components/user-details-list/user-details-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { UserDetailsCardComponent } from './components/user-details-card/user-details-card.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
  {
    path: '', component: DashboardContainerComponent,
  },
  {
    path:':id',component:DetailsComponent
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule
  ],
  declarations: [
    DashboardContainerComponent,
    UserDetailsCardComponent,
    UserDetailsListComponent,
    DetailsComponent]
})
export class DashboardModule { }
