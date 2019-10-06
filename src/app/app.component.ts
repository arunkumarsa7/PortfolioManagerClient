import { Component } from '@angular/core';
import { RouterOutlet ,Router} from '@angular/router';
import {  routerTransition } from './core/animations/app-animations';
import { AuthenticationService } from './shared/service/_services';
import { User } from './shared/models';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
  <div id="app-content" class="routeContainer" [@routerTransition]="prepareRoute(outlet)" >
  <router-outlet #outlet="outlet">/</router-outlet>
  </div>
  <app-footer></app-footer>`,
  styles: [], animations: [ routerTransition()]
})
export class AppComponent {
  public static title = 'Service Level Management | Portfolio Management';
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}
  prepareRoute(outlet: RouterOutlet) {
    // outlet && outlet.activatedRouteData &&
    return  outlet.activatedRouteData.animation;
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
