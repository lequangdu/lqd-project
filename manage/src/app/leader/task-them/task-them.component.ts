import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { NhanVienService } from '../../nhan-vien.service';

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent {
  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute, private nhanVienService: NhanVienService) { }
  task: any;
  nhanvien: any;
  ngOnInit(): void {
    this.taskService.getTask().subscribe((data: any) => {
      this.task = data;
    });
    this.nhanVienService.getNhanVien().subscribe((data: any) => {
      this.nhanvien = data;
    });
  }
  themTask(task: any) {
    this.taskService.themTask(task).subscribe((data: any) => {
      alert('Thêm thành công!');
      this.router.navigate(['/leader/task-list']);
    });
  }

}
