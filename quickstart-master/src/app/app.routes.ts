import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent} from './users/users.component';
import { UserDetailComponent } from './users/userdetail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id', component: UserDetailComponent }
  ]}
];

export const routing = RouterModule.forRoot(routes);