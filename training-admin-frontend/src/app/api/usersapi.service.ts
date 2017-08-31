import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { User } from '../users/user';

@Injectable()
export class UsersApiService{
    url = "./app/api/userslist.json";
    constructor(private http:Http) { }

    getAllUsers() : Observable<User[]> {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    } 

    private extractData(res: Response) {
        let body = res.json();
            return body;
        }

    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
        }
}