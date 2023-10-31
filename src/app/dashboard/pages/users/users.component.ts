import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName = '';

  // testUser: User = {
  //   id: 1,
  //   name: 'John',
  //   lastName: 'Tevez',
  //   email: 'john@gmail.com',
  //   course: 'Vue',
  //   classYear: '1'
  // }

  users: User[] = [];

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService,) {
      this.users = this.usersService.getUsers();
    }


    openUsersDialog(): void {

      this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({
        next: (v) => {
          console.log('Valor : ', v); 
          if(!!v) {
            // this.userName = v;

            this.users = [
              ...this.users,
              {
                ...v,
                id: new Date().getTime(),
              },
            ];
          }
        },
      });
  }

  onEditUser(user: User): void {
    this.matDialog.open(UsersDialogComponent, {
      data: user,
    }).afterClosed().subscribe({
      next: (v) => {
        if(!!v) {
          // OPCION CON FILTER 
          // // CREO COPIA DE ARRAY ACTUAL 
          // const arrayNuevo = [...this.users];
          // // ENCUENTRO INDICE DE USUARIO A EDITAR 
          // const indexToEdit = arrayNuevo.findIndex((u) => u.id === user.id);
          // // REASIGNO VALOR AL USUARIO ENCONTRADO 
          // arrayNuevo[indexToEdit] = { ...arrayNuevo[indexToEdit], ...v};
          // this.users = [...arrayNuevo];

          // OPCION CON MAP
          this.users = this.users.map((u) => u.id === user.id ? ({ ...u, ...v}) : u
          );
        }
      }
    });
  }

  onDeleteUser(userId: number): void {
    if (confirm('Estas seguro de querer borrar este alumno?')) {
    this.users = this.users.filter((u) => u.id !== userId);
    }
  }
}
