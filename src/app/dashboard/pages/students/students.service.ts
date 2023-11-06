import { Injectable } from '@angular/core';
import { Student } from './models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentsService {
  students: Student[] = [
    {
      id: 1,
      name: 'Alejandro',
      lastName: 'Perez',
      email: 'alejo@g.com',
      course: 'Angular',
    },
    {
      id: 2,
      name: 'Mario',
      lastName: 'Gomez',
      email: 'mario@g.com',
      course: 'JS',
    },
    {
      id: 3,
      name: 'Mariana',
      lastName: 'Valencia',
      email: 'mariana@g.com',
      course: 'React',
    },

  ];

  getStudents$(): Observable<Student[]> {
    return of(this.students);
  }

  createStudent$(payload: Student): Observable<Student[]> {
    this.students.push(payload);
    return of([...this.students]);
  }

  editStudent$(id: number, payload: Student): Observable<Student[]> {
    return of(
      this.students.map((s) => (s.id === id ? { ...s, ...payload } : s))
    );
  }

  deleteStudent$(id: number): Observable<Student[]> {
    this.students = this.students.filter((s) => s.id !== id);
    return of(this.students);
  }

  getStudentById$(id: number): Observable<Student | undefined> {
    return of(this.students.find((c) => c.id === id));
  }
}

