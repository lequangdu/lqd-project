import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { NhanVienService } from '../../nhan-vien.service';


@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent {
  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute, private nhanVienService: NhanVienService) { }
  nhanvien: any;
  task: any;
  ngOnInit(): void {
    this.nhanVienService.getNhanVien().subscribe((data: any) => {
      this.nhanvien = data;
    });
    let id = this.route.snapshot.params['id'];
    this.taskService.getTaskById(id).subscribe((data: any) => {
      this.task = data;
    });
  }

  suaTask() {
    this.taskService.suaTask(this.task).subscribe((data: any) => {
      alert('Sửa thành công!');
      this.router.navigate(['/leader/task-list']);
    });
  }
}
