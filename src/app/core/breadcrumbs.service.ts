import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";

import { Breadcrumbs, Breadcrumb } from "./breadcrumbs/breadcrumbs.config";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private _items: BehaviorSubject<Breadcrumbs> =
    new BehaviorSubject<Breadcrumbs>([]);

  public get items(): Observable<Breadcrumbs> {
    return this._items;
  }

  public setItems(value: Breadcrumbs): void {
    this._items.next(value);
  }

  public getFrameworksItem(
    label: string = 'Frameworks',
    labelOnly: boolean = false
  ): Breadcrumb {
    return {
      path: '/frameworks',
      label,
      labelOnly
    };
  }

  public getFrameworkItem(
    path: string,
    label: string = 'Framework',
    labelOnly: boolean = false
  ): Breadcrumb {
    return {
      path,
      label,
      labelOnly
    };
  }
}
