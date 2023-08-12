import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  getTask() {
    return this.http.get('http://localhost:3000/task');
  }
  getTaskById(id: number) {
    return this.http.get('http://localhost:3000/task/' + id);
  }
  
  themTask(task: any) {
    return this.http.post('http://localhost:3000/task', task);
  }
  suaTask(task: any) {
    return this.http.put('http://localhost:3000/task/' + task.id, task);
  }
  xoaTask(id: number) {
    return this.http.delete('http://localhost:3000/task/' + id);
  }
}
