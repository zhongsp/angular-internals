import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ApplicationListComponent, ApplicationDetailComponent],
  exports: [ApplicationListComponent, ApplicationDetailComponent],
})
export class ApplicationModule { }
