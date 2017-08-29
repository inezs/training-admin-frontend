import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { UserDetail } from './userdetail.component';
import { User } from './user';

@Component({
    moduleId: module.id,
    selector: 'userslist',
    templateUrl: 'userslist.component.html'
})

export class UsersList {
    constructor(private usersService: UsersService) {
    }
    users = this.usersService.getAllUsers();

    selectedUser: User;
 
    onSelect(user: User): void {
        this.selectedUser = user;
  }
}