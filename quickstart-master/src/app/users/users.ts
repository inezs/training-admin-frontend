import { Injectable } from '@angular/core';
import { User } from './user';

const USERS : User[] = [
      {id: 1, name: 'Luke Skywalker', email:'Luke.Skywalker@mitrais.com'},
      {id: 2, name: 'Darth Vader', email:'DarthVader@mitrais.com'},
      {id: 3, name: 'Han Solo', email:'HanSolo@mitrais.com'},
    ];

@Injectable()
export class UsersService{

  getAll() : User[] {
    return USERS.map(u => this.clone(u));
  }
  get(id: number) : User {
    return this.clone(USERS.find(u => u.id === id));
  }

  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}