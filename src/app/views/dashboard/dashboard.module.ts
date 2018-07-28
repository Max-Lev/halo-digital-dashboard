import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UserDetailsCardComponent } from './components/user-details-card/user-details-card.component';
import { DetailsComponent } from './components/details/details.component';
import { ActiveDirective } from '../../shared/directives/active.directive';


const routes: Routes = [
  {
    path: '', component: DashboardContainerComponent,
  },
  {
    path: ':id', component: DetailsComponent
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ],
  declarations: [
    DashboardContainerComponent,
    UserDetailsCardComponent,
    ActiveDirective,
    DetailsComponent]
})
export class DashboardModule { }
