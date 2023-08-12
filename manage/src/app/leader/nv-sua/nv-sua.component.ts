import { Component } from '@angular/core';
import { NhanVienService } from '../../nhan-vien.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent {
  constructor(private nvService: NhanVienService, private router: Router, private route: ActivatedRoute) { }
  khuvuc: any;
  nhanvien: any;
  ngOnInit(): void {
    this.nvService.getNhanVien().subscribe((data: any) => {
      this.khuvuc = data;
    });
    let id = this.route.snapshot.params['id'];
    this.nvService.getNhanVienById(id).subscribe((data: any) => {
      this.nhanvien = data;
    });
  }

  suaNhanVien() {
    this.nvService.suaNhanVien(this.nhanvien).subscribe((data: any) => {
      alert('Sửa thành công!');
      this.router.navigate(['/leader/nv-list']);
    });
  }
}
