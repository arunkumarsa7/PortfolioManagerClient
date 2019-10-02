import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  routerTransition } from './core/animations/app-animations';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
  <div id="app-content" class="routeContainer" [@routerTransition]="prepareRoute(outlet)" >
  <router-outlet #outlet="outlet"></router-outlet>
  </div>
  <app-footer></app-footer>`,
  styles: [], animations: [ routerTransition()]
})
export class AppComponent {
  public static title = 'Service Level Management | Portfolio Management';
  prepareRoute(outlet: RouterOutlet) {
    // outlet && outlet.activatedRouteData &&
    return  outlet.activatedRouteData.animation;
  }
}
