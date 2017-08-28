import { Component } from '@angular/core';
import { UsersService } from './users';

@Component({
    moduleId: module.id,
    templateUrl: 'users.component.html'
})

export class UsersList {
    constructor(private usersService: UsersService) { 
    }
    users = this.usersService.getAll();
}