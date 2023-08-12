import { Component } from '@angular/core';
import { NhanVienService } from '../../nhan-vien.service';
import { Route ,Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent {
  constructor(private nhanVienService: NhanVienService, private router: Router, private route: ActivatedRoute) { }
  nhanvien: any;
  khuvuc: any;
  ngOnInit(): void {
    this.nhanVienService.getNhanVien().subscribe((data: any) => {
      this.khuvuc = data;
    });
  }

  themNhanVien(nhanvien: any) {
    this.nhanVienService.themNhanVien(nhanvien).subscribe((data: any) => {
      alert('Thêm thành công!');
      this.router.navigate(['/leader/nv-list']);
    });
  }

}
