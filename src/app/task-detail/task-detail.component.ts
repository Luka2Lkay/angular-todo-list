import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  @Input() selectedTask?: any;

  title = 'To Do List';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _taskService: TasksService,
    private location: Location
  ) {}

  
  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    const taskId = this.activatedRoute.snapshot.paramMap.get('id');
    this._taskService.getTaskList().subscribe({
      next: (res) => {
        const task = res.find((el: any) => el.id == taskId);
        this.selectedTask = task;
      },
      error: console.log,
    });
  }

  goBack(): void {
    this.location.back()
  }
}
