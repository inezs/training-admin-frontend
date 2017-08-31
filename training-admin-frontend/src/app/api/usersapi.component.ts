import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { UsersApiService } from './usersapi.service';
import { User } from '../users/user';

import 'rxjs/Rx';

@Component({
   moduleId: module.id,
   templateUrl: './usersapi.component.html'
})
export class UsersApiComponent implements OnInit { 
   observableUser: Observable<User[]>
   users: User[];
   errorMessage: String;
   constructor(private usersApiService: UsersApiService) { }
   ngOnInit(): void {
        this.observableUser = this.usersApiService.getAllUsers();
	this.observableUser.subscribe(
            users => this.users = users,
            error =>  this.errorMessage = <any>error);
   }
} 