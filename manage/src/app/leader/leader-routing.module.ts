import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderComponent } from './leader.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { baoveGuard } from '../baove.guard';

const routes: Routes = [
  { path: '', component: LeaderComponent },
  { path: 'duan-list', component: DuanListComponent, canActivate: [baoveGuard] },
  { path: 'duan-them', component: DuanThemComponent, canActivate: [baoveGuard] },
  { path: 'duan-sua/:id', component: DuanSuaComponent },
  { path: 'nv-list', component: NvListComponent,canActivate: [baoveGuard] },
  { path: 'nv-them', component: NvThemComponent, canActivate: [baoveGuard] },
  { path: 'nv-sua/:id', component: NvSuaComponent },
  { path: 'task-list', component: TaskListComponent, canActivate: [baoveGuard] },
  { path: 'task-them', component: TaskThemComponent, canActivate: [baoveGuard]   },
  { path: 'task-sua/:id', component: TaskSuaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderRoutingModule { }
