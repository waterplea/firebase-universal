import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hack',
    loadChildren: () =>
      import('./hack/hack.module').then(m => m.HackModule),
  },
  {
    path: 'issue',
    loadChildren: () =>
      import('./issue/issue.module').then(m => m.IssueModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
