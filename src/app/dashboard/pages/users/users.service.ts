import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): User[] {
    return [
      {
        id: 1,
        name: 'John',
        lastName: 'Tevez',
        email: 'john@gmail.com',
      },
      {
        id: 2,
        name: 'Valeria',
        lastName: 'Eder',
        email: 'Valeria@gmail.com',
      },
    ];
  }
}
