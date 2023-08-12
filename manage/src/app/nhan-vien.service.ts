import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NhanVienService {

  constructor(private http: HttpClient) { }
  getNhanVien() {
    return this.http.get('http://localhost:3000/nhanvien');
  }
  getNhanVienById(id: number) {
    return this.http.get('http://localhost:3000/nhanvien/' + id);
  }
  
  themNhanVien(nhanvien: any) {
    return this.http.post('http://localhost:3000/nhanvien', nhanvien);
  }
  suaNhanVien(nhanvien: any) {
    return this.http.put('http://localhost:3000/nhanvien/' + nhanvien.id, nhanvien);
  }
  xoaNhanVien(id: number) {
    return this.http.delete('http://localhost:3000/nhanvien/' + id);
  }
}
