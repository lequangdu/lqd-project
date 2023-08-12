import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DuLieuService {
  constructor(private http: HttpClient) { }
  getDuAn() {
    return this.http.get('http://localhost:3000/duan');
  }
  getDuAnById(id: number) {
    return this.http.get('http://localhost:3000/duan/' + id);
  }
  
  themDuAn(duan: any) {
    return this.http.post('http://localhost:3000/duan', duan);
  }
  suaDuAn(duan: any) {
    return this.http.put('http://localhost:3000/duan/' + duan.id, duan);
  }
  xoaDuAn(id: number) {
    return this.http.delete('http://localhost:3000/duan/' + id);
  }
}
