import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTilesComponent } from './dashboard-tiles/dashboard-tiles.component';
import { DashboardTitleComponent } from './dashboard-title/dashboard-title.component';
import { DocumentButtonsComponent } from './document-buttons/document-buttons.component';
import { DashboardHeaderComponent } from './dashboard-header.component';

@NgModule({
  declarations: [DashboardHeaderComponent, DashboardTitleComponent, DocumentButtonsComponent, DashboardTilesComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardHeaderComponent]
})
export class DashboardHeaderModule { }
