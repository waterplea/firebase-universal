import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {catchError, map, take} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Component({
  selector: 'hack',
  template: `
    <p>{{activatedRoute.snapshot.data | json}}</p>
    <p>Hack {{request$ | async | json}}</p>
  `
})
export class HackComponent {
  // Even .doc as a second request fixes the issue
  readonly request$ = this.firestore
    .doc('test/k1MoENxRXaxVR2NCbQMf')
    .get()
    .pipe(map(doc => doc.data()));

  constructor(
    @Inject(ActivatedRoute) readonly activatedRoute: ActivatedRoute,
    @Inject(AngularFirestore) private readonly firestore: AngularFirestore,
  ) {}
}
