import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
  <p>ShellComponent</p>
  <router-outlet></router-outlet>
  `
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class ShellComponent {
  title = 'sample-one';
}
