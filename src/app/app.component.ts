import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-menu-bar></app-menu-bar>
  <router-outlet></router-outlet>
  
  `
})
export class AppComponent {
  title = 'store';
}
