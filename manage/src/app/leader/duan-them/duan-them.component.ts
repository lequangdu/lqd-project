import { Component } from '@angular/core';
import { DuLieuService } from '../../du-lieu.service';
import { NhanVienService } from '../../nhan-vien.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent {
  constructor(private duLieuService: DuLieuService, private nhanVienService: NhanVienService, private router: Router) { }
  listNV: any;
  ngOnInit(): void {
    this.nhanVienService.getNhanVien().subscribe((data: any) => {
      this.listNV = data;
    });
  }
  themDuAn(duan: any) {
    if (duan.tenDuAn == null || duan.tenDuAn == "") {
      alert('Tên dự án không được để trống!');
      return;
    } else if (duan.tien == null || duan.tien == "") {
      alert('Giá không được để trống!');
      return;
    } else {
      this.duLieuService.themDuAn(duan).subscribe((data: any) => {
        alert('Thêm thành công!');
        this.router.navigate(['/leader/duan-list']);
      });
    }

  }
}
