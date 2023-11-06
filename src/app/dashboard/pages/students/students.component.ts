import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './models';
import { StudentsService } from './students.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  students$: Observable<Student[]>;

  constructor(
    private studentsService: StudentsService,
    private matDialog: MatDialog
  ) {
    this.students$ = this.studentsService.getStudents$();
  }

  addStudent(): void {
    this.matDialog
      .open(StudentsDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.students$ = this.studentsService.createStudent$({
              id: new Date().getTime(),
              name: result.name,
              lastName: result.lastName,
              email: result.email,
              course: result.course,
            });
          }
        },
      });
  }

  onDeleteStudent(studentId: number): void {
    this.students$ = this.studentsService.deleteStudent$(studentId);
  }

  onEditStudent(studentId: number): void {
    this.matDialog
      .open(StudentsDialogComponent, {
        data: studentId,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          // console.log(result);
          if (!!result) {
            this.students$ = this.studentsService.editStudent$(studentId, result);
          }
        },
      });
  }

}
