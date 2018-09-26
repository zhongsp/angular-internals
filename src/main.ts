// import { enableProdMode } from '@angular/core';
import { PlatformRef, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

const platformRef: PlatformRef = platformBrowserDynamic();
const bootstrapPromise: Promise<NgModuleRef<AppModule>> = platformRef.bootstrapModule(AppModule);

bootstrapPromise
  .then(info => console.log('bootstrap completed...', info))
  .catch(err => console.log(err));
