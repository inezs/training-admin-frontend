import { Component } from '@angular/core';
import { User } from '../users/user';

@Component({
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
    user: User={
    id : 0,
    name : 'Inez Fiona Sutanto',
    email : 'InezFiona.Sutanto@mitrais.com',
    }
}