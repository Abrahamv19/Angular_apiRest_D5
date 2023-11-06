import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
// import { StudentDetailComponent } from './components/student-detail/student-detail.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
        // /student
        path: '',
        component: StudentsComponent
    },
    // /course/:id
    // {   
    //     path: ':id',
    //     component: StudentDetailComponent
    // },
  ])],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

// const routes: Routes = [
//     {   // /students
//         path: '',
//         component: StudentsComponent
//     },
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class StudentsRoutingModule { }