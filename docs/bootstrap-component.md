# 应用的启动组件

在引导启动Angular一个应用时，在`NgModule`的`bootstrap`数组里配置的组件会自动启动。
同时自动启动的组件可以不止一个。
下例中有两个组件`AppComponent`和`BootstrapComponent`在应用初始化时同时被渲染在页面上。

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

## 收集元数据

> [CompileMetadataResolver#getNgModuleMetadata](https://github.com/angular/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L498)

当应用以`AppModule`做为主模块启动时，Angular首先收集`AppModule`的元数据（metadata）。

在`bootstrap`里声明的组件，会被自动地加到`entryComponents`中去。
并且此时，Angular会为`entryComponents`里指定的组件创建`ComponentFactory`。

[Image: Compile Matadata for AppModule](./img/bootstrap-component_01_compile-meta.PNG "Compile Matadata for AppModule")

## Related Links

- [引导启动Angular应用](./bootstrap.md)
