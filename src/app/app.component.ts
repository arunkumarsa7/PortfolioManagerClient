import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-header></app-header>
    <div id="app-content"><router-outlet></router-outlet></div>
    <app-footer></app-footer>
  `,
  styles: [
    `
      #app-content {
        min-height: 70%;
       
      }
    `
  ]
})
export class AppComponent {
  public static title = "Service Level Management | Portfolio Management";
}
