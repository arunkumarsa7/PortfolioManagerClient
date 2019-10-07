import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/service/data/data.service';
import { ProjectInfo } from '../../../../shared/models/project-info';
@Component({
  selector: 'app-dashboard-title',
  templateUrl: './dashboard-title.component.html',
  styleUrls: ['./dashboard-title.component.css']
})
export class DashboardTitleComponent implements OnInit {
  project$: ProjectInfo;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProject().subscribe((data: ProjectInfo) => this.project$ = data);
  }

}
