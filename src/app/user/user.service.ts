import { Injectable } from '@angular/core';
import { User } from './User';
import { USERS } from './userlist';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
    getUsers(page:number,limit:number){
        const value={
            total:USERS.length,
            users:USERS.slice((page-1)*limit,page*limit)
        };
        return Observable.of(value);
    }
}