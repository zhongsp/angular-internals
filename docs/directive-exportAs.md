# Directive exportAs

指令的`exportAs`元信息用于将此指令的实例暴露给模版引用变量。

```html
<div pzExportAs [attr.role]="tplVar.title" #tplVar="pzExportAs">
  {{tplVar.title}}
</div>
```

```ts
@Directive({
  selector: '[pzExportAs]',
  exportAs: 'pzExportAs'
})
export class DirExportAsDirective { }
```

模版引用变量解析顺序：

1. `exportAs`属性指定的指令或组件实例，如：`#myToggle="toggle"`
2. 元素上绑定的组件，如：`<toggle-on #toggleOn></toggle-on>`
3. 普通的HTML元素`<div #someDiv></div>`

## References

[Handle Template Reference Variables with Directives](https://blog.angularindepth.com/handle-template-reference-variables-with-directives-223081bc70c2)
