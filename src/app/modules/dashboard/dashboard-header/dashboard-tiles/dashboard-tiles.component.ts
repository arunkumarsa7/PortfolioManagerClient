import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/service/data/data.service';
import { ProjectInfo } from '../../../../shared/models/project-info';
@Component({
  selector: 'app-dashboard-tiles',
  templateUrl: './dashboard-tiles.component.html',
  styleUrls: ['./dashboard-tiles.component.css']
})
export class DashboardTilesComponent implements OnInit {
  project$: ProjectInfo;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProject().subscribe((data: ProjectInfo) => this.project$ = data);
  }

}
