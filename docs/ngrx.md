# ngrx

## Install Redux Devtools
[https://github.com/ngrx/platform/blob/master/docs/store-devtools/README.md](https://github.com/ngrx/platform/blob/master/docs/store-devtools/README.md)

Enable it in `AppModule`:

```ts
imports: [
  // StoreDevtoolsModule.instrument({
  //   name: 'Angular Sample App',
  //   maxAge: 20,
  //   logOnly: environment.production
  // }),
  !environment.production
    ? StoreDevtoolsModule.instrument({
      name: 'Angular Sample App',
      maxAge: 20,
      logOnly: environment.production
    })
    : [],
],
```

## Typical structure

```txt
(feature name)
|-- (sub-feature)
|-- state
    |-- feature.actions.ts
    |-- feature.effects.ts
    |-- feature.reducer.ts
    |-- index.ts

```

## Action

```ts
// All actions
// Use a namespace like '[Counter]' for better debugging
export enum CounterAction {
  IncreaseCount = '[Counter] Increase Count',
  DecreaseCount = '[Counter] Decrease Count'
}

// Action creator
export class IncreaseCount implements Action {
  readonly type = CounterAction.IncreaseCount;

  constructor(readonly payload: { amount: number }) { }
}

// Action creator
export class DecreaseCount implements Action {
  readonly type = CounterAction.DecreaseCount;

  constructor(readonly payload: { amount: number }) { }
}

// Provide union action creators
export type CounterActions = IncreaseCount | DecreaseCount;
```
