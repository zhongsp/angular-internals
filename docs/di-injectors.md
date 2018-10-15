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

## References

- [Hierarchical Dependency Injectors](https://angular.io/guide/hierarchical-dependency-injection)
- [What you always wanted to know about Angular Dependency Injection tree](https://blog.angularindepth.com/angular-dependency-injection-and-tree-shakeable-tokens-4588a8f70d5d)
- [A curious case of the @Host decorator and Element Injectors in Angular](https://blog.angularindepth.com/a-curios-case-of-the-host-decorator-and-element-injectors-in-angular-582562abcf0a)
