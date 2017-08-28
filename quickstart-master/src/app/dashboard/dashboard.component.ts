import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
    myId: number = 0;
    myName: string = 'Inez Fiona Sutanto';
    myEmail: string = 'InezFiona.Sutanto@mitrais.com';
}