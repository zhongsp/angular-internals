# NgRx

下面，我们要实现一个叫`Todo`的新特性。

## 安装 NgRx Devtools

[参考文档](https://github.com/ngrx/platform/blob/master/docs/store-devtools/README.md)

1. 安装 `@ngrx/store-devtools`

    ```sh
    npm install @ngrx/store-devtools --save
    # or
    yarn add @ngrx/store-devtools
    ```

2. 下载Chrome插件 `Redux Devtools Extension`

    [下载安装文档](https://github.com/zalmoxisus/redux-devtools-extension/)

3. 在应用代码里配置

    ```ts
    import { StoreDevtoolsModule } from '@ngrx/store-devtools';
    import { environment } from '../environments/environment'; // Angular CLI environemnt

    @NgModule({
      imports: [
        StoreModule.forRoot(reducers),
        !environment.production               // Only enable in prod environment
          ? StoreDevtoolsModule.instrument({
            name: 'Angular Sample App',
            maxAge: 20,                       // Retains last 20 states
            logOnly: environment.production   // Restrict extension to log-only mode
          })
          : [],
      ],
    })
    export class AppModule {}
    ```

## 典型的目录结构

使用统一的`state`做为目录名，包含`NgRx`相关的组件。
统一`todo.{actions,effects,reducer}.ts`的命名。

```txt
todo/
|-- todo-routing.module.ts
|-- todo.component.ts
|-- todo.module.ts
|-- todo-detail/
    |-- todo-detail.component.ts
|-- todo-list/
    |-- todo-list.component.ts
|-- state/
    |-- todo.actions.ts
    |-- todo.effects.ts
    |-- todo.reducer.ts
    |-- index.ts（放置store相关）
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

## Reference

- [NgRx — Best Practices for Enterprise Angular Applications](https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7)
