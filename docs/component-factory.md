# Component Factory

组件工厂，用于创建组件。

```ts
abstract class ComponentFactory<C> {
  abstract selector: string
  abstract componentType: Type<any>
  abstract ngContentSelectors: string[]
  abstract inputs: {...}
  abstract outputs: {...}
  abstract create(injector: Injector, projectableNodes?: any[][], rootSelectorOrNode?: string | any, ngModule?: NgModuleRef<any>): ComponentRef<C>
}
```

## 它是何时被创建的？

```ts
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
```

1. 进入启动`AppModule`模块的准备阶段。
1. 编译`AppModule`，获取`AppModule`的元数据。
1. 将`bootstrap`里的`AppComponent`加到`entryComponents`数组里。
1. 遍历`entryComponents`数组，开始获取每个组件（也是指令）的元数据。
1. 在上一步过程中，创建`ComponentFactory`。[getComponentFactory](https://github.com/angular/angular/blob/6.1.9/packages/compiler/src/metadata_resolver.ts#L398)
