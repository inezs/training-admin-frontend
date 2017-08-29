import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from './users.service';
import { UserDetailComponent} from './userdetail.component';

@Component({
    moduleId: module.id,
    selector: 'userslist',
    templateUrl: 'userslist.component.html'
})

export class UsersList {
    constructor(private usersService: UsersService, private router: Router) {
    }
    users = this.usersService.getAllUsers();

    goToUserDetail(id: Number): void {
        this.router.navigate(['/users', id]);
  }
}