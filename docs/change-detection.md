# Change Detection

类`ChangeDetectorRef`是Angular View的基类。它提供了变更检测的功能。

`change-detection`和`view`一样都是树型结构。

## ChangeDetectionStrategy

有两种：`ChangeDetectionStrategy.OnPush`和`ChangeDetectionStrategy.Default`。

### ChangeDetectionStrategy.OnPush

- 原始（primitive）数据类型值的改变会触发检测更新
- 引用（reference）类型：
  * 引用的改变会触发检测更新
  * 否则，*不会*触发检测更新
- 某个`view`里触发了事件，这个`view`会触发检测更新

数据绑定有变化，但Angular没有进行检测更新，推荐（性能）使用`cd.markForCheck()`。
这样调度器就会在未来的某个时间点上调用`detectChanges()`去做检测更新。

### ChangeDetectionStrategy.Default

- 任何值的改变都会触发检测更新

## changeDetectorRef.detach()

将`view`从`change-detection`树中移除。

一个被移除的`view`不会再进行自动检测更新，除非使用`changeDetectorRef.reattach()`将`view`再次添加回来。

在`detach`的情况下，可以使用`changeDetectorRef.detectChanges()`来强行进行检测更新。

`changeDetectorRef.detectChanges()`会在组件上同步地进行检测更新操作。使用此方法时注意性能。

## 结论

- 可以通过使用`ChangeDetectionStrategy.OnPush`来改进性能，可配合使用`Immutable Data`
- 更进一步，可以使用`detach()`。若变化特别频繁，可以设计如每5秒更新一次的算法。
