import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    declarations: [
      DashboardComponent

      ],
      imports: [
          CommonModule
              ],
      providers: [],
      exports: [DashboardComponent]

})
export class DashboardModule { }
