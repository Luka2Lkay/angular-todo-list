import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditListComponent } from '../add-edit-list/add-edit-list.component';
import { TasksService } from '../tasks.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title = 'To Do List';

  displayedColumns: string[] = [
    'id',
    'taskName',
    'description',
    'date',
    'priority',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialogue: MatDialog,
    private _taskService: TasksService
  ) {}

  openAddEditForm(): void {
    this._dialogue.open(AddEditListComponent);
  }

  getTaskList() {
    this._taskService.getTaskList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  deleteTask (id: number) {
    this._taskService.deleteTask(id).subscribe({
      next: () => {
        alert('deleted')
      },
      error: console.log
    })
  }
  ngOnInit(): void {
    this.getTaskList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
