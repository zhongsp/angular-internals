# 应用的启动组件

```html
<body>
  <!-- AppComponent selector -->
  <sample-root></sample-root>

  <!-- BootstrapComponent selector -->
  <sample-bootstrap></sample-bootstrap>
</body>
```

```ts
@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    BootstrapComponent
  ],
  entryComponents: [
    AppComponent,
    BootstrapComponent
  ]
})
export class AppModule { }
```

在引导启动Angular一个应用时，在`NgModule`的`bootstrap`数组里配置的组件会自动启动。
同时自动启动的组件可以不止一个。
`AppComponent`和`BootstrapComponent`在应用初始化时同时被渲染在页面上。

## 启动应用入口

```js
PlatformRef.prototype.bootstrapModule = function (moduleType, compilerOptions) {
  var compiler = compilerFactory.createCompiler([options]);
  return compiler.compileModuleAsync(moduleType)
    .then(function (moduleFactory) {
      return _this.bootstrapModuleFactory(moduleFactory, options);
    });
};
```

## 准备阶段

当应用以`AppModule`做为主模块启动时，Angular首先收集`AppModule`的元数据（metadata）。
它包括获取模块，指令（包括组件）以及管道的编译元数据（compile metadata）。

在`bootstrap`里声明的组件，会被自动地加到`entryComponents`中去。
并且此时，Angular会为`entryComponents`里指定的组件创建`ComponentFactory`。

```js
// async
var moduleFactory = compiler.compileModuleAsync(moduleType)
```

[Image: Compile Matadata for AppModule](./img/bootstrap-component_01_compile-meta.PNG "Compile Matadata for AppModule")

## 启动`AppModule`

遍历`AppModule`的`bootstrap`元数据里指定的组件，调用`ApplicationRef.bootstrap(component)`。

调用`ComponentFactory.create(injector: Injector, projectableNodes?: any[][], rootSelectorOrNode?: string | any, ngModule?: NgModuleRef<any>): ComponentRef<C>`创建组件。

```js
ApplicationRef.prototype.bootstrap = function (componentOrFactory, rootSelectorOrNode) {
  // ...
  var componentFactory =
    this._componentFactoryResolver.resolveComponentFactory(componentOrFactory);
  // ...
  var compRef = componentFactory.create(Injector.NULL, [], selectorOrNode, ngModule);
  // ...
  return compRef;
};
```

## 创建组件

调用`ComponentFactory.create()`创建组件。

> [viewDef](https://github.com/angular/angular/blob/6.1.9/packages/core/src/view/view.ts#L23)

> [createViewNodes](https://github.com/angular/angular/blob/6.1.9/packages/core/src/view/view.ts#L250)

将组件模版抽象为`ViewDefinition`数据结构。
它包含了`template`里所有结点的信息，如原生的`div`元素，组件`<sample-root>`等等。

然后，根据`ViewDefinition`的信息，针对不同类型的结点使用不同的方式创建对应元素或属性。

例如，创建`<div>`则使用原生的`document.createElement()`API。

## Related Links

- [引导启动Angular应用](./bootstrap.md)
