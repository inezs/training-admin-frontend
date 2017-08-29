import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './users.service';
import { User} from './user';

@Component({
    moduleId: module.id,
    templateUrl: 'userdetail.component.html'
})

export class UserDetailComponent {
    private id:number;
    private sub:any;
    private user:User;

    constructor(private route: ActivatedRoute, private usersService: UsersService) {}

    private ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
        this.user = this.usersService.getUser(this.id);
        });
    }

    private ngOnDestroy() {
        this.sub.unsubscribe();
    }
}