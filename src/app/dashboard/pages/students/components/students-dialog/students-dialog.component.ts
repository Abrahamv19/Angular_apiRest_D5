import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrls: ['./students-dialog.component.scss']
})
export class StudentsDialogComponent {

  nameControl = new FormControl('', Validators.required);
  lastNameControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', Validators.required);
  courseControl = new FormControl('', Validators.required);


  studentForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    course: this.courseControl,
  });

  constructor(
    private matDialogRef: MatDialogRef<StudentsDialogComponent>,
    private studentsService: StudentsService,
    @Inject(MAT_DIALOG_DATA) private studentId?: number
  ) {
    if (studentId) {
      this.studentsService.getStudentById$(studentId).subscribe({
        next: (c) => {
          if (c) {
            this.studentForm.patchValue(c);
          }
        },
      });
    }
  }

  public get isEditing(): boolean {
    return !!this.studentId;
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      return this.studentForm.markAllAsTouched();
    } else {
      // logica para crear un estudiante
      this.matDialogRef.close(this.studentForm.value);
    }
  }

}
