import { Component } from '@angular/core';
import { NhanVienService } from '../../nhan-vien.service';

@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.css']
})
export class NvListComponent {
  constructor(private nhanVienService: NhanVienService) { }
  nhanvien: any;
  ngOnInit(): void {
    this.nhanVienService.getNhanVien().subscribe((data: any) => {
      this.nhanvien = data;
    });
  }

  xoaNhanVien(id: number) {
    if(confirm('Bạn có chắc chắn muốn xóa?')){
      this.nhanVienService.xoaNhanVien(id).subscribe((data: any) => {
        alert('Xóa thành công!');
        this.ngOnInit();
      });
    }
  }
}
