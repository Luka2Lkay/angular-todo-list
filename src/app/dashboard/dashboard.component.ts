import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditListComponent } from '../add-edit-list/add-edit-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
title = "To Do List"

constructor(private _dialogue: MatDialog){}

openAddEditForm(): void {
  this._dialogue.open(AddEditListComponent)
}

}
