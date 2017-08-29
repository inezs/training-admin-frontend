import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersService} from './users/users.service';
import { UsersComponent } from './users/users.component';
import { UsersList} from './users/userslist.component';
import { UserForm } from './users/userform.component';
import { UserDetail } from './users/userdetail.component'; 

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  routing
                ],
  declarations: [ AppComponent, 
                  DashboardComponent, 
                  LoginComponent,
                  UsersComponent,
                  UsersList,
                  UserForm,
                  UserDetail
                ],
  bootstrap:    [ AppComponent ],
  providers:    [ UsersService]
})
export class AppModule { }
