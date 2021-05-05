import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OtherComponent} from './pages/other-module/other/other.component';

const routes: Routes = [
  {
    path: 'aaa',
    loadChildren: () => import('./pages/other-module/other-module.module').then(m => m.OtherModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
