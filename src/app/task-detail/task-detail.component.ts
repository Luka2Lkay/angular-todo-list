import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  @Input() selectedTask?: any;

  constructor(
    private route: ActivatedRoute,
    private _taskService: TasksService,
  ) {}

  taskId?: any;
  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this._taskService.getTaskList().subscribe({
      next: (res) => {
        const task = res.find((el: any) => el.id == this.taskId);
        this.selectedTask = task;
      },
      error: console.log,
    });
  }
}
