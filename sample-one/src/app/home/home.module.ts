import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShellComponent } from '../shell.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [{
  path: '',
  component: ShellComponent,
  children: [{
    path: 'home',
    component: HomeComponent
  }]
}];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class HomeModule { }
