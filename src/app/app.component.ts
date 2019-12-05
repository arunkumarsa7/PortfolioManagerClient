import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from './core/animations/app-animations';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
  <div id="app-content" class="routeContainer" >
  <router-outlet></router-outlet>
  </div>
  <app-footer></app-footer>
  <app-timeout></app-timeout>`,
  styles: []
})
export class AppComponent {
  public static title = 'Service Level Management | Portfolio Management';
}
