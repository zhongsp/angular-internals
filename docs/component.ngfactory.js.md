# ngfactory.js

Angular编译器会将源码编译解析，生成对应的`ngfactory`文件。

针对下面的`CounterComponent`，若使用`AOT`编译，将生成对应的`counter.component.ngfactory.js`文件。

```sh
> ngc -p tsconfig.json
```

组件的源码：

```ts
@Component({
  selector: 'sample-counter',
  template: `
  <div>
    Count: {{count}}
    <br>
    <button (click)="addCount()"> +2 </button>
    <button (click)="reduceCount()"> -1 </button>
  </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit { }
```

生成的`counter.component.ngfactory.js`片段：

```js
// _l 是个返回空函数的函数：function() { return function() { } }

export function View_CounterComponent_0(_l) {
  return i0.ɵvid(0, [
    (_l()(), i0.ɵeld(0, 0, null, null, 6, "div", [], null, null, null, null, null)),
    (_l()(), i0.ɵted(1, null, [" Count: ", " "])),
    (_l()(), i0.ɵeld(2, 0, null, null, 0, "br", [], null, null, null, null, null)),
    (_l()(), i0.ɵeld(3, 0, null, null, 1, "button", [], null, [[null, "click"]],
      function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if (("click" === en)) {
          var pd_0 = (_co.addCount() !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      }, null, null)),
    (_l()(), i0.ɵted(-1, null, [" +2 "])),
    (_l()(), i0.ɵeld(5, 0, null, null, 1, "button", [], null, [[null, "click"]],
      function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if (("click" === en)) {
          var pd_0 = (_co.reduceCount() !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      }, null, null)),
    (_l()(), i0.ɵted(-1, null, [" -1 "]))
  ], null,
  function (_ck, _v) {
    var _co = _v.component;
    var currVal_0 = _co.count;
    _ck(_v, 1, 0, currVal_0);
  });
}
```
