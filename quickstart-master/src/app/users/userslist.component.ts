import { Component } from '@angular/core';
import { UsersService } from './listofusers.service';

@Component({
    moduleId: module.id,
    selector: 'userslist',
    templateUrl: 'userslist.component.html'
})

export class UsersList {
    constructor(private usersService: UsersService) {
    }
    users = this.usersService.getAll();
}