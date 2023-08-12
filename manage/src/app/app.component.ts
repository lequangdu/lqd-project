import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authSV: AuthService) { }
  thoat() {
    this.authSV.thoat();
  }
  daDangNhap() { return this.authSV.daDangNhap() }
}
