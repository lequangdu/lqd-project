import { Component } from '@angular/core';
import { DuLieuService } from '../../du-lieu.service';
import { NhanVienService } from '../../nhan-vien.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css']
})
export class DuanListComponent {
  constructor(private duLieuService: DuLieuService, private nhanVienService: NhanVienService) { }
  listDuAn: any;
  listNV: any;
  ngOnInit(): void {
    this.duLieuService.getDuAn().subscribe((data: any) => {
      this.listDuAn = data;
    });
    this.nhanVienService.getNhanVien().subscribe((data: any) => {
      this.listNV = data;
    });
  }

  xoaDuAn(id: any) {
    if (confirm('Bạn có chắc chắn muốn xóa?')){
      this.duLieuService.xoaDuAn(id).subscribe((data: any) => {
        alert('Xóa thành công!');
        this.ngOnInit();
      });
    }
  }

  formatCurrency(value: number) {
    if (value) {
      return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
    return '';
  }

}
