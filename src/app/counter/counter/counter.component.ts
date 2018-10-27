import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { INCREMENT, DECREMENT } from '../state/counter.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-counter',
  template: `
  <div>
    Count: {{count$ | async}}
    <br>
    <button (click)="addCount()"> + </button>
    <button (click)="reduceCount()"> - </button>
  </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.count$ = this.store.pipe(select('counter'));
  }

  addCount() {
    this.store.dispatch({
      type: INCREMENT
    });
  }

  reduceCount() {
    this.store.dispatch({
      type: DECREMENT
    });
  }
}
