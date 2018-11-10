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

在应用的根目录（通常为`/src/app/`）下新建`root-store`目录。
我们把这个应用所有的`state`按`feature`分类后，都放在这个目录下。

文件名清晰地反映了与之对应的`NgRx`里的概念。

`index.ts`提供了集中管理导入导出的能力，可使代码更简洁。

```txt
app/
|-- root-store/
    |-- root-store.module.ts
    |-- index.ts
    |-- root-state.ts
    |-- user-store/
    |-- todo-store/
        |-- todo-store.module.ts
        |-- index.ts
        |-- state.ts
        |-- actions.ts
        |-- reducer.ts
        |-- effects.ts
        |-- selectors.ts
```

## Store 与 State

`Store`是核心，它将所有的部件（`state`，`action`，等）整合在一起。

我们有一个`root store`，它包含了所有的`feature store`。
同样的，我们有一个`root state`，它包含了所有的`feature state`。

```ts
// root-state.ts
export interface State {
  todo: TodoStoreStates.State;
}

// todo-store/state.ts
export interface State {
  items: Todo[];
  total: number;
  error: string | null;
}
export const initialState: State = {
  items: [],
  total: 0,
  error: null
};
```

## Action

注意这里我们使用了`'[Todo]'`命名空间，在debug时很方便。

```ts
import { Action } from '@ngrx/store';

import { Todo } from '../../models';

export enum ActionType {
  LoadItems = '[Todo] LoadItems',
  LoadItemsSuccess = '[Todo] LoadItemsSuccess',
  LoadItemsFailure = '[Todo] LoadItemsFailure'
}

export class LoadItemsAction implements Action {
  readonly type = ActionType.LoadItems;
}

export class LoadItemsSuccessAction implements Action {
  readonly type = ActionType.LoadItemsSuccess;
  constructor(readonly payload: { items: Todo[] }) {}
}

export class LoadItemsFailureAction implements Action {
  readonly type = ActionType.LoadItemsFailure;
  constructor(readonly payload: { error: string }) {}
}

export type Actions =
  | LoadItemsAction
  | LoadItemsSuccessAction
  | LoadItemsFailureAction;
```

## Reducer

用于产生`state`的纯函数。

```ts
import { initialState, State } from './state';
import { Actions, ActionType } from './actions';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.LoadItems:
      return state;
    case ActionType.LoadItemsSuccess:
      return {
        ...state,
        items: action.payload.items
      };
    case ActionType.LoadItemsFailure:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state;
  }
}
```

## Reference

- [NgRx — Best Practices for Enterprise Angular Applications](https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7)
