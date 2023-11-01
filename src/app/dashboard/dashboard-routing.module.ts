import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CoursesComponent } from "./pages/courses/courses.component";
import { UsersComponent } from "./pages/users/users.component";
import { StudentsComponent } from "./pages/students/students.component";
import { EnrollmentsComponent } from "./pages/enrollments/enrollments.component";
import { UserDetailComponent } from "./pages/users/components/user-detail/user-detail.component";
import { DashboardComponent } from "./dashboard.component";
import { CourseDetailComponent } from "./pages/courses/components/course-detail/course-detail.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            //  ruta: /dashboard
            {
                path: '', //  /dashboard
                component: DashboardComponent,
                children: [
                    // {
                    //     path: 'home',  //  /dashboard/home
                    //     component: HomeComponent,
                    // },

                    {
                        path: 'home',
                        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),

                    },
                    {
                        path: 'courses',
                        loadChildren: () => import('./pages/courses/courses.module').then((m) => m.CoursesModule),

                    },
                    {
                        path: 'users',
                        loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule),

                    },
                    {
                        path: 'students',
                        loadChildren: () => import('./pages/students/students.module').then((m) => m.StudentsModule),

                    },
                    {
                        path: 'enrollments',
                        loadChildren: () => import('./pages/enrollments/enrollments.module').then((m) => m.EnrollmentsModule),

                    },
                    // {
                    //     path: 'courses',
                    //     component: CoursesComponent,
                    // },
                    // {
                    //     path: 'courses/:id',
                    //     component: CourseDetailComponent
                    // },

                    // {
                    //     path: 'students',
                    //     component: StudentsComponent,
                    // },
                    // {
                    //     path: 'enrollments',
                    //     component: EnrollmentsComponent,
                    // },
                    {
                        path: '**',
                        redirectTo: 'home',
                    },
                ]
            },
        ]),
    ],
    exports: [RouterModule],
})

export class DashboardRoutingModule { }
