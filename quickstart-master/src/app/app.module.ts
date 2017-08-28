import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersService} from './users/users';
import { UsersList} from './users/userslist.component';

@NgModule({
  imports:      [ BrowserModule,
                  routing ],
  declarations: [ AppComponent, 
                  DashboardComponent, 
                  LoginComponent, 
                  UsersList ],
  bootstrap:    [ AppComponent ],
  providers:    [ UsersService]
})
export class AppModule { }
