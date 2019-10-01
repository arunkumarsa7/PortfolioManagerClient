import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { AppChartsModule } from './charts/app-charts.module';
import { ProjectComponent } from './project.component';
import { ProjectInfoComponent } from './project-info/project-info.component';

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
