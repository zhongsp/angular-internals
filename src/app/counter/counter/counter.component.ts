import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromCounter from '../state/counter.state';
import { Increment, Decrement } from '../state/counter.action';

@Component({
  selector: 'sample-counter',
  template: `
  <div>
    Count: {{count}}
    <br>
    <button (click)="addCount()"> +2 </button>
    <button (click)="reduceCount()"> -1 </button>
  </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  count: number;

  constructor(private store: Store<fromCounter.State>) {}

  ngOnInit() {
    this.store
      .pipe(select(fromCounter.getCount))
      .subscribe(count => (this.count = count));
  }

  addCount() {
    this.store.dispatch(new Increment({
      amount: 2
    }));
  }

  reduceCount() {
    this.store.dispatch(new Decrement());
  }
}
