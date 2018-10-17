# 依赖注入与注入器

> Dependency Injection and Injectors

## 注入器的种类

- NullInjector
- Platform Injector
- NgZoneInjector
- NgModule Injector
- Component Injector
- Element Injector

### Platform Injector

内置的`PlatformInjector`由当前页面上所有运行的Angular应用所共享。

可以通过类似下面的API来配置`PlatformInjector`。

```ts
const platformRef: PlatformRef = platformBrowserDynamic({
  provide: MY_PLATFORM_CONFIG, useValue: { namespace: 'zhongsp' }
});
```

### 模块注入器（NgModule Injector）

`AppModuleInjector`是Angular应用的`根注入器`（`AppModule`是应用的启动模块）。

所有直接或间接被`AppModule`导入的模块上的所有`providers`会被收集起来，
放到`AppModuleInjector`也就是根注入器上。

`ComponentFactoryResolver`也会被加到根注入器上。

```ts
@Injectable({
  providedIn: 'root'
  // providedIn: 'ReportModule'
})
export class AService { }

@NgModule({
  providers: [ BService ]
})
export class ReportModule { }
```

在有懒加载（lazy load）的模块时，Angular会创建出有层级的模块注入器。

### 组件级别的注入器（Component Injector）

组件可以拥有自己的注入器。组件上注入器的作用范围组件以及它的子组件。

```ts
@Component({
  selector: 'app-heroes',
  providers: [ HeroService ],
  template: `
    <h2>Heroes</h2>
    <app-hero-list></app-hero-list>
  `
})
export class HeroesComponent { }
```

### 元素注入器（Element Injector）

注入器实际上并不属于一个组件，属于组件实例关联的DOM元素。
同一个组件的不同实例也是不同的注入器。
关联到同一个DOM元素上的组件和指令共享同一个注入器。

Angular内部使用名为`View`的数据结构来抽象表示组件。
`View`包含一系列`ViewNodeDefinition`定义。

若`ViewNodeDefinition`的类型为`Element`，如`<div>`的`ViewNodeDefinition`，那么Angular会在此`ViewNode`上定义一个新的`Injector`。

通过在`<div>`添加上一些指令来配置这个`Injector`，如`<div my-scrollable></div>`。

```js
let DivElementNodeDefinition = {
  element: {
    name: 'div',
    publicProviders: {
      myScrollable: <referenceToDirectiveDefinition>
    }
  }
}
```

## 注入器树（Injector Tree）

为了解决懒加载模块的多次初始化问题，`Injector Tree`在`EntryComponent`的位置分开为两棵平行的`Injector Tree`：

1. Element Injector Tree
1. NgModule Injector Tree

解析注入时，先从`Element Injector Tree`查找，而后切换到`NgModule Injector Tree`继续查找。

## 解析依赖（Resolve Dependency）

### 在组件里请求依赖

```html
<body>
  <di-parent></di-parent>
</body>
```

```ts
@Component({
  selector: 'di-parent',
  template: `
    <section class="di-parent">
      <h2>DI Parent</h2>
      <di-child></di-child>
    </section>
  `,
  providers: [XService]
})
export class DiParentComponent {
  constructor() { }
}

@Component({
  selector: 'di-child',
  template: `
    <section class="di-child">
      <h2>DI Child</h2>
    </section>
  `,
  providers: [XService]
})
export class DiChildComponent {
  constructor(private xService: XService) { }
}
```

现在，我们在`DiChildComponent`里请求`XService`依赖。解析：

- 首先，检查当前组件自己的元素注入器。
  每个组件都会创建自己独立的注入器（组件本质上也是指令）。
  这个注入器实际保存在组件的宿主DOM元素上（上面代码中的`<di-child></di-child>`元素）。这个注入器是一个`Element Injector`。
  视图内元素注入器收集了所有父元素上的`providers`。
  元素注入器会收集它所在的视图上所有的父结点的`provides`。

- 若未找到，则继续向上查找所有的视图父元素（`view parent element`）上的元素注入器。
  - 组件视图父元素为组件的宿主元素（即上面的`<di-child></di-child>`和`<di-parent></di-parent>`）。
  - 内嵌视图父元素为包含`view container`的元素。

### 使用了`@Host`装饰器

仅检查当前组件自己的元素注入器，若未找到则报错，并不继续向上查找视图父元素。

## References

- [Hierarchical Dependency Injectors](https://angular.io/guide/hierarchical-dependency-injection)
- [What you always wanted to know about Angular Dependency Injection tree](https://blog.angularindepth.com/angular-dependency-injection-and-tree-shakeable-tokens-4588a8f70d5d)
- [A curious case of the @Host decorator and Element Injectors in Angular](https://blog.angularindepth.com/a-curios-case-of-the-host-decorator-and-element-injectors-in-angular-582562abcf0a)
