import { Component } from '@angular/core';
import { User } from './user';

@Component({
    moduleId: module.id,
    selector: 'userform',
    templateUrl: './userform.component.html'
})

export class UserForm {
    inputUser = new User (0, 'Tinky Winky', 'Tinky.Winky@mitrais.com');
    onSubmit():void{
    }
}