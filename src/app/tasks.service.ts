import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private _http: HttpClient) {
  }

  addTask(data:any): Observable<any> {
    return this._http.post('http://localhost:3000/tasks', data);
  }

  updateTask(id:number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/tasks/${id}`, data);
  }

  getTaskList(): Observable<any> {
    return this._http.get('http://localhost:3000/tasks');
  }

  getTask(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/tasks/${id}`);
  }

  deleteTask(id : number): Observable<any> {
    return this._http.delete(`http://localhost:3000/tasks/${id}`);
  }
}
