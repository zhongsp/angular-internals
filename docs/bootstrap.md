# Bootstrap

## Create an Angular platform

The Angular platform is the entry point for Angular on a web page. Each page
has exactly one platform, and services (such as reflection) which are common
to every Angular application running on the page are bound in its scope.

### Platform factory

`Platform: core` is the top platform.
And it's the parent of all the others.
It has to be included in any other platform.

```txt
Platform: core
|
|--Platform: coreDynamic
|  |--Platform: browserDynamic
|
|--Platform: browser
```

### Create platform by platform factory

A page's platform is initialized implicitly when a platform is created via a
platform factory `platformBrowser`, or explicitly by calling the
`createPlatform` function.

```ts
const platformRef: PlatformRef = platformBrowserDynamic();
```

## Use platform to bootstrap an Angular module

```ts
const platformRef = platformBrowserDynamic();
const bootstrapPromise = platformRef.bootstrapModule(AppModule);
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

