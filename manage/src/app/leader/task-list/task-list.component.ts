import { Component } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  constructor(private taskService: TaskService) { }
  listTask: any;
  ngOnInit(): void {
    this.taskService.getTask().subscribe((data: any) => {
      this.listTask = data;
    });
  }
  
  xoaTask(id: any) {
    if (confirm('Bạn có chắc chắn muốn xóa?')){
      this.taskService.xoaTask(id).subscribe((data: any) => {
        alert('Xóa thành công!');
        this.ngOnInit();
      });
    }
  }
  
}
