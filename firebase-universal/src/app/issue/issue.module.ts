import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Resolver} from 'src/app/resolver';
import {IssueComponent} from 'src/app/issue/issue.component';

const ROUTES: Routes = [
  {
    path: `:id`,
    component: IssueComponent,
    resolve: {
      data: Resolver,
    },
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [IssueComponent],
  exports: [IssueComponent],
})
export class IssueModule {}
