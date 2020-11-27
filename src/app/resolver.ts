import {Inject, Injectable} from '@angular/core';
import {Resolve, Router} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {catchError, take} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})
export class Resolver implements Resolve<any> {
  constructor(
    @Inject(AngularFirestore) private readonly firestore: AngularFirestore,
    @Inject(Router) private readonly router: Router,
  ) {}

  resolve(): Observable<any> {
    // I actually need .doc here, based on ActivatedRouteSnapshot 'id' param
    // But even with hack of second request .doc doesn't work, only .collection works
    return this.firestore
      .collection('test')
      .valueChanges()
      .pipe(
        take(1),
        catchError(() => this.router.navigate(['']) && EMPTY)
      );
  }
}
