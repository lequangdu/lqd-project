import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DoiPassComponent } from './doi-pass/doi-pass.component';
import { DownLoadComponent } from './down-load/down-load.component';
import { baoveGuard } from './baove.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leader', loadChildren: () => import('./leader/leader.module').then(m => m.LeaderModule) },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'dang-nhap', component: DangNhapComponent },
  { path: 'dang-ky', component: DangKyComponent },
  { path: 'doi-pass', component: DoiPassComponent },
  { path: 'down-load', component: DownLoadComponent, canActivate: [baoveGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
