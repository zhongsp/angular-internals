import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";

import { Breadcrumbs } from "./breadcrumbs/breadcrumbs.config";

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
}
