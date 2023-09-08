import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-edit-list',
  templateUrl: './add-edit-list.component.html',
  styleUrls: ['./add-edit-list.component.css'],
})
export class AddEditListComponent implements OnInit {
  taskForm: FormGroup = this._formBuilder.group({
    taskName: '',
    date: '',
    description: '',
    priority: '',
  });

  priorities: string[] = ['High', 'Medium', 'Low'];

  constructor(private _formBuilder: FormBuilder, private _taskService: TasksService, private _dialogRef: DialogRef<AddEditListComponent>) {}

  ngOnInit(): void {
    this.taskForm;
  }

  onFormSubmit() {
    if (this.taskForm.valid) {
      this._taskService.addTask(this.taskForm.value).subscribe({
        next: (val:any) => {
          alert('Added a visitor!')
          this._dialogRef.close()
        },
        error: (err:any) => {
          console.error(err)
        }
      })
    }
  }
}