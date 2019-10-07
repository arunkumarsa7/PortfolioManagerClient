import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppChartsModule } from './charts/app-charts.module';
import { ProjectComponent } from './project.component';
import { ProjectInfoComponent } from './project-info/project-info.component';

@NgModule({
  declarations: [ProjectComponent, ProjectInfoComponent],
  imports: [
    CommonModule,
    AppChartsModule
  ],
  exports: [ProjectComponent]
})
export class ProjectsModule { }
