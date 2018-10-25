# main.ts

Angular CLI自动生成的代码如下：

```ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
```

- 经测试，运行`ng build --prod`时，`bootstrapModule(AppModule)`会被Angular CLI自动替换成`bootstrapModuleFactory(AppModuleFactory)`。

- `platformBrowserDynamic().bootstrapModule(AppModule)`不能拆开写，否则`ng build --prod`版本会报错，如：
  ```ts
  const platformRef = platformBrowserDynamic();
  const bootstrapPromise = platformRef.bootstrapModule(AppModule);
  bootstrapPromise
    .then(info => console.log('bootstrap completed...', info))
    .catch(err => console.log(err));
  ```
