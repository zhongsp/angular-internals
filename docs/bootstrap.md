# 引导启动

Angular使用`NgModule`将应用的各个组成部分集成到一起。
随后，也是通过一个主`NgModule`来引导启动一个Angular应用，这个模块通常命名为`AppModule`。

```ts
import { PlatformRef, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const platformRef: PlatformRef = platformBrowserDynamic();
const bootstrap: Promise<NgModuleRef<AppModule>> = platformRef.bootstrapModule(AppModule);

bootstrap
  .then(info => console.log('bootstrap completed...', info))
  .catch(err => console.log(err));
```

Angular源码里广泛地使用了工厂模式（模块，指令，组件和管道等）。
比如，我们声明的`AppComponent`组件，Angular会先解析出`AppComponentFactory`，之后使用这个组件工厂创建一个或多个组件实例。

## 创建 Angular platform

Angular platform是页面上Angular应用的入口点。
每个页面仅有一个platform与若干服务（如反射），它们对于页面上所有的Angular应用来说是公用的。
也就是说，一个页面上可以有多个Angular应用同时存在。
但它们是共享一个platform和若干核心服务的。

### Platform factory

`platform`是由`platform factory`所创建。
在加载Angular代码库的过程中，有如下的`platform factory`会被创建：

```txt
Platform: core
|
|--Platform: coreDynamic
|  |--Platform: browserDynamic
|
|--Platform: browser
```

注意，它是一种有继承的树形结构。

其中，`Platform: core`为根。
它是所有其它`platform`的祖先。
它必然会被包含进其它的`platform`中。

在创建这些`platform factory`的过程中，一些内置的`providers`会被收集起来：

```ts
// Platform: core
const _CORE_PLATFORM_PROVIDERS: StaticProvider[] = [
  // Set a default platform name for platforms that don't set it explicitly.
  {provide: PLATFORM_ID, useValue: 'unknown'},
  {provide: PlatformRef, deps: [Injector]},
  {provide: TestabilityRegistry, deps: []},
  {provide: Console, deps: []},
];
const platformCore = createPlatformFactory(null, 'core', _CORE_PLATFORM_PROVIDERS);

// Platform: coreDynamic
const platformCoreDynamic = createPlatformFactory(platformCore, 'coreDynamic', [
  {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
  {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
]);

// Platform: browserDynamic
const INTERNAL_BROWSER_PLATFORM_PROVIDERS: StaticProvider[] = [
  {provide: PLATFORM_ID, useValue: PLATFORM_BROWSER_ID},
  {provide: PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true},
  {provide: PlatformLocation, useClass: BrowserPlatformLocation, deps: [DOCUMENT]},
  {provide: DOCUMENT, useFactory: _document, deps: []},
];
const INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS: StaticProvider[] = [
  INTERNAL_BROWSER_PLATFORM_PROVIDERS,
  {
    provide: COMPILER_OPTIONS,
    useValue: {providers: [{provide: ResourceLoader, useClass: ResourceLoaderImpl, deps: []}]},
    multi: true
  },
  {provide: PLATFORM_ID, useValue: PLATFORM_BROWSER_ID},
];
const platformBrowserDynamic = createPlatformFactory(
    platformCoreDynamic, 'browserDynamic', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
```

### 使用 platform factory 创建 platform

在使用`platform factory`创建`platform`时，`platform`会被自动初始化。
或者你还可以显式地调用`createPlatform()`函数。

```ts
const platformRef: PlatformRef = platformBrowserDynamic();
```

上面的代码将使用`Platform: browserDynamic`工厂创建一个`platform`。
它会向上遍历直到`Platform: core`，其间收集所有的`providers`。
最终，调用`function createPlatform(injector: Injector): PlatformRef`函数创建一个`platform`。

## 使用 platform 去引导 Angular 模块

```ts
const bootstrap: Promise<NgModuleRef<AppModule>> = platformRef.bootstrapModule(AppModule);
```

这里我们使用的是*Just-in-Time*方式编译，而不是预编译*Ahead-of-Time*。
因此Angular会首先创建一个*JIT Compiler*。

> 其实，Angular只有一个编译器，至于它是JIT还是AOT，则取决于你编译的时机。

然后，开始用创建的编译器去编译`AppModule`模块：

### 获取模块，指令（包括组件）以及管道的编译元数据（compile metadata）

> [JitCompiler~_loadModules](https://github.com/angular/angular/blob/master/packages/compiler/src/jit/compiler.ts#L125)

在这个阶段，Angular开始加载编译时所需的所有模块的元数据。
调用`getNgModuleMetadata()`，并传入`AppModule`做为参数，返回一个`CompileNgModuleMetadata`的实例。
这个对象将用来编译Angular模块。

如果是*Just-in-Time*模式，Angular还会继续加载所有嵌套的模块，指令以及管道的编译元数据。

[Image: Compile Matadata for AppModule](./img/bootstrap_01_compile-meta.PNG "Compile Matadata for AppModule")

[Image: Compile Matadata for AppModule](./img/bootstrap_02_compile-meta_imported-modules.PNG "Compile Matadata for AppModule")

[Image: Compile Matadata for AppModule](./img/bootstrap_03_compile-meta_transitive_module.PNG "Compile Matadata for AppModule")

### 编译指令和组件

> [JitCompiler~_compileComponents](https://github.com/angular/angular/blob/master/packages/compiler/src/jit/compiler.ts#L164)

这一步，挑选出所有的普通组件（如`AppComponent`），以及`entryComponents`里声明的组件。
解析它们的模版和样式。

### 编译模块

> [JitCompiler~_compileModule](https://github.com/angular/angular/blob/master/packages/compiler/src/jit/compiler.ts#L146)

编译`AppModule`，并得到一个`ngModuleFactory`。

### 引导启动模块

使用`NgModuleFactory.create()`创建一个模块。
它返回值为`NgModuleRef`类型。

遍历`NgModuleRef`上定义的`bootstrap components`（`AppComponent`）并引导启动它。
引导启动应用根组件的流程：

根据声明的选择器（selector），将组件放置在DOM的相应位置，然后开启自动变化检测来完成组件的初始化。
一个组件还可以被放置在与其声明的选择器（selector）不同的位置上。

为每个组件创建`ComponentFactory`，然后调用`ComponentFactory.create()`来创建组件。
至此，组件树就被渲染到了页面上。
