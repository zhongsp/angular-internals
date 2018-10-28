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
