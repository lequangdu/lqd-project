import { Component } from '@angular/core';
import { DuLieuService } from '../../du-lieu.service';
import { NhanVienService } from '../../nhan-vien.service';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent {
  constructor(private duLieuService: DuLieuService, private nhanVienService: NhanVienService, private router: Router, private route: ActivatedRoute) { }
  listNV: any;
  duan: any;
  ngOnInit(): void {
    this.nhanVienService.getNhanVien().subscribe((data: any) => {
      this.listNV = data;
    });
    let id = this.route.snapshot.params['id'];
    this.duLieuService.getDuAnById(id).subscribe((data: any) => {
      this.duan = data;
    });
  }

  suaDuAn() {
    this.duLieuService.suaDuAn(this.duan).subscribe((data: any) => {
      alert('Sửa thành công!');
      this.router.navigate(['/leader/duan-list']);
    });
  }
}
