import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UsersList} from './users/userslist.component';
import { UserForm } from './users/userform.component';
import { UserDetailComponent } from './users/userdetail.component'; 
import { UsersApiComponent} from './api/usersapi.component';

import { UsersService} from './users/users.service';
import { UsersApiService  } from './api/usersapi.service';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing
                ],
  declarations: [ AppComponent, 
                  DashboardComponent, 
                  LoginComponent,
                  UsersComponent,
                  UsersList,
                  UserForm,
                  UserDetailComponent,
                  UsersApiComponent
                ],
  bootstrap:    [ AppComponent ],
  providers:    [ UsersService,
                  UsersApiService
                ]
})
export class AppModule { }
