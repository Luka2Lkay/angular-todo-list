import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm;
  }

  onFormSubmit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
    }
  }
}
