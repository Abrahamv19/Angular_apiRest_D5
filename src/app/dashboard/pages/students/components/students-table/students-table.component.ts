import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {

  @Input()
  dataSource: Student[] = [];

  @Output()
  editStudent = new EventEmitter();

  @Output()
  deleteStudent = new EventEmitter();

  displayedColumns = ['id', 'name', 'lastName', 'email', 'course', 'actions'];

}
