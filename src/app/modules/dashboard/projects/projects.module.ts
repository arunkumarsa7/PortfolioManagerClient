import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { AppChartsModule } from './project/charts/app-charts.module';
import { ProjectComponent } from './project/project.component';
import { ProjectInfoComponent } from './project/project-info/project-info.component';

@NgModule({
  declarations: [ProjectComponent, ProjectInfoComponent],
  imports: [
    CommonModule,
    ChartsModule,
    AppChartsModule
  ],
  exports: [ProjectComponent]
})
export class ProjectsModule { }
