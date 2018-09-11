# Bootstrap

Full sample code:

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

## Create an Angular platform

The Angular platform is the entry point for Angular on a web page. Each page
has exactly one platform, and services (such as reflection) which are common
to every Angular application running on the page are bound in its scope.

### Platform factory

`platform` is created by `platform factory`.
When loading Angular libraries, the following platform factories will be created:

```txt
Platform: core
|
|--Platform: coreDynamic
|  |--Platform: browserDynamic
|
|--Platform: browser
```

It has an inheritance structure.

`Platform: core` is the top level platform.
And it's the parent of all the other platforms.
It has to be included in any other platforms.

While creating these factories, some built-in providers are collected. e.g.:

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

### Create platform by platform factory

A page's platform is initialized implicitly when a platform is created via a
platform factory, or explicitly by calling the `createPlatform` function.

```ts
const platformRef: PlatformRef = platformBrowserDynamic();
```

The code above will create a platform by `Platform: browserDynamic` factory.

It'll traverse the platform tree up from `Platform: browserDynamic` to
`Platform: core`, and finally create one platform with
`function createPlatform(injector: Injector): PlatformRef` function.

A new `injector` is created at this time, and passed into `createPlatform()`
function.

## Use platform to bootstrap an Angular module

```ts
const bootstrap: Promise<NgModuleRef<AppModule>> = platformRef.bootstrapModule(AppModule);
```

If using runtime compile instead of offline compile,
it will create a runtime *compiler* first in the above code.

```ts
const compilerFactory: CompilerFactory = injector.get(CompilerFactory);
const compiler = compilerFactory.createCompiler([options]);
```

And then, use the `compiler` to compile `AppModule` Angular module:

```ts
class JitCompiler {
  // `moduleType` is function `AppModule`
  private _compileModuleAndComponents(moduleType: Type, isSync: boolean): SyncAsync<object> {
    return SyncAsync.then(this._loadModules(moduleType, isSync), () => {
      this._compileComponents(moduleType, null);
      return this._compileModule(moduleType);
    });
  }
}
```

Load all modules and nested modules' metadata and also the declared directives
and pipes.

## Compile components

Then, start to compile all components related to `AppModule`:

```ts
this._compileComponents(AppModule, null);
```

## Compile Module

