import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [
  ]
})
export class UsersTableComponent {

  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<User>();

  displayedColumns = ['id', 'fullname', 'email', 'course', 'classYear', 'actions'];

  constructor(private router: Router) {

  }

  gotoDetail(userid: number): void {

    // /dashboard/courses/detail/1
    // this.router.navigate(['dashboard', 'users', 'detail', userid], {
    //   queryParams: {
    //     search: 'Hola mundo',
    //   },
    // })
    this.router.navigate(['dashboard', 'users', 'detail', userid])
  }

}
