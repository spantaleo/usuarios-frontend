import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserDetailComponent }  from './user-detail/user-detail.component';
import { UserNewComponent }  from './user-new/user-new.component';
import { UserSearchComponent }  from './user-search/user-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'new', component: UserNewComponent },
  { path: 'search', component: UserSearchComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }