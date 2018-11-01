import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromCounter from '../state';
import { IncreaseCount, DecreaseCount, LoadCount } from '../state/counter.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'sample-counter',
  template: `
  <div>
    Count: {{count}}.
    <br>
    <button (click)="addCount()"> +2 </button>
    <button (click)="reduceCount()"> -1 </button>
    <button (click)="getTotal()">Get total count</button>
  </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit, OnDestroy {
  count: number;

  private isComponentActive = true;

  constructor(private store: Store<fromCounter.State>) {}

  ngOnInit() {
    this.store
      .pipe(
        takeWhile(() => this.isComponentActive),
        select(fromCounter.getCount)
      )
      .subscribe(count => (this.count = count));
  }

  addCount() {
    this.store.dispatch(new IncreaseCount({
      amount: 2
    }));
  }

  reduceCount() {
    this.store.dispatch(new DecreaseCount({
      amount: 1
    }));
  }

  getTotal() {
    this.store.dispatch(new LoadCount());
  }

  ngOnDestroy() {
    this.isComponentActive = false;
  }
}
