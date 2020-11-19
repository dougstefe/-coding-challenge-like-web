import { Injectable } from '@angular/core';
import { User } from '@app/core/models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor() {}

    getId(): Observable<User>{
        return of(
            new User(
                'xpto-guid',
                'Xpto da Silva'
            )
        );
    }

}