import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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

  constructor(
    private _formBuilder: FormBuilder,
    private _taskService: TasksService,
    private _dialogRef: MatDialogRef<AddEditListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.taskForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.taskForm.valid)  {
      if (this.data) {
        this._taskService.updateTask(this.data.id, this.taskForm.value).subscribe({
          next: (val: any) => {
            alert('Updated a visitor!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        this._taskService.addTask(this.taskForm.value).subscribe({
          next: (val: any) => {
            alert('Added a visitor!');
            this._dialogRef.close();
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

  cancel(): void {
    this._dialogRef.close();
  }
}
