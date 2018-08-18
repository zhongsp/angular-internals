import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BreadcrumbsComponent
  ],
  exports: [
    BreadcrumbsComponent
  ]
})
export class CoreModule { }
