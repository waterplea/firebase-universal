import {NgModule} from '@angular/core';
import {HackComponent} from 'src/app/hack/hack.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Resolver} from 'src/app/resolver';

const ROUTES: Routes = [
  {
    path: `:id`,
    component: HackComponent,
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
  declarations: [HackComponent],
  exports: [HackComponent],
})
export class HackModule {}
