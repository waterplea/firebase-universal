import {Component, Inject} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'hack',
  template: `
    <p>{{activatedRoute.snapshot.data | json}}</p>
  `
})
export class IssueComponent {
  constructor(@Inject(ActivatedRoute) readonly activatedRoute: ActivatedRoute) {}
}
