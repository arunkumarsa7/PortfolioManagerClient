import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header><router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
  public static title = 'Service Level Management | Portfolio Management';
}
