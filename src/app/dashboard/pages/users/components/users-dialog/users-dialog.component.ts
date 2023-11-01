import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styles: [
  ]
})
export class UsersDialogComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder,
    private matDialogRef: MatDialogRef<UsersDialogComponent>,
    // RECIBO DATA EN DIALOG
    @Inject(MAT_DIALOG_DATA) public user?: User,
    ) {

    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      // course: ['', Validators.required],
      // classYear: ['', Validators.required],
    });

    if(this.user) {
      this.userForm.patchValue(this.user);
    }

  }
  public get nameControl() {
    return this.userForm.get('name');
  }

  public get lastNameControl() {
    return this.userForm.get('lastName');
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.userForm.value);
    }
  }
}
