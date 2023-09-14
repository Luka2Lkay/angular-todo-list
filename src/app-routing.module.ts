import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { TaskDetailComponent } from './app/task-detail/task-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full'},
  { path: 'tasks', component: DashboardComponent },
  { path: 'detail/:id', component: TaskDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }