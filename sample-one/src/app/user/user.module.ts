import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShellComponent } from '../shell.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';


const routes: Routes = [{
  path: '',
  component: ShellComponent,
  children: [{
    path: 'user',
    component: UserComponent
  }]
}];

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class UserModule { }
