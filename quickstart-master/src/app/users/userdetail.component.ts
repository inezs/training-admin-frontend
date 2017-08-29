import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
    moduleId: module.id,
    selector: 'userdetail',
    templateUrl: 'userdetail.component.html'
})

export class UserDetail {
    @Input() user: User;
}