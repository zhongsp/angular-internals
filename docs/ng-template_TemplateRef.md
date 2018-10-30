# <ng-template> and TemplateRef

此物与创建`Embedded`视图有关。

Angular里有两种视图，即：`Embedded`和`Host`视图。

## 首先要有个模板

`<ng-template>`可创建一个模板，如：

```html
<ng-template #theTemplate let-x="x" let-y="y" let-print="print">
  <p>
    Point position: ( {{x}}, {{y}} ).
  </p>
  <button (click)="print()">Print Point</button>
</ng-template>
```

可以给模板传递参数，如上例中的`x`和`y`，`let-xxx`是Angular定义的语法，会被简单转换成模板参数。

因此`let-x`和`let-y`转换后的参数`x`，`y`可以在模板里引用。

参数是函数也OK，如`printFn`。

## 使用模板创建元素

有两种方式，即：

- 声明式
- 命令式（编程式）

### 声明式

借助于内置的指令[`NgTemplateOutlet
`](https://angular.io/api/common/NgTemplateOutlet)。

它接收两个参数，即：模板和输入参数。

```html
<ng-container
  *ngTemplateOutlet="theTemplate; context: { x: this.x, y: this.y, print: this.print }">
</ng-container>
```

### 命令式（编程式）

- 首先准备一个`ViewContainer`，来放置稍后创建的`Embeded`视图。
  ```html
  <ng-container #theContainer></ng-container>
  ```

- 要有一个模板，即`<ng-template>`，还使用上面那个。
  ```html
  <ng-template #theTemplate let-x="x" let-y="y" let-print="print">
    <p>
      Point position: ( {{x}}, {{y}} ).
    </p>
    <button (click)="print()">Print Point</button>
  </ng-template>
  ```

- 使用这个模板，动态地创建`Embeded`视图，并放在前面的`ViewContainer`里。
```ts
interface MyNgTemplateOutletContext {
  x: number;
  y: number;
  print: ()=>{};
}

@Component({ ... })
export class AppComponent {
  x: number = 4;
  y: number = 2;

  @ViewChild('theContainer', { read: ViewContainerRef }) theContainer: ViewContainerRef;

  @ViewChild('theTemplate') theTemplate: TemplateRef<MyNgTemplateOutletContext>;

  ngAfterViewInit(): void {
    // 此函数被调用时，@ViewChild已经被设置好了

    this.theContainer.createEmbeddedView(this.theTemplate, {
      x: this.x,
      y: this.y,
      print: this.print
    })
  }

  print() {
    console.log('Print');
  }
}
```

## References

- [NgTemplateOutlet
](https://angular.io/api/common/NgTemplateOutlet)
- [Use <ng-template>
](https://blog.angularindepth.com/use-ng-template-c72852c37fba)
- [TemplateRefs are Angular’s Render Props
](https://blog.angularindepth.com/templaterefs-are-angulars-render-props-a2b97cbcc362)
- [Here is how to get ViewContainerRef before @ViewChild query is evaluated
](https://blog.angularindepth.com/here-is-how-to-get-viewcontainerref-before-viewchild-query-is-evaluated-f649e51315fb)
