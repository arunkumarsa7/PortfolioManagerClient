import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ProjectInterface } from '../project-interface';
@Component({
  selector: 'app-dashboard-static-content',
  templateUrl: './dashboard-static-content.component.html',
  styleUrls: ['./dashboard-static-content.component.css']
})
export class DashboardStaticContentComponent implements OnInit {

  project$: ProjectInterface;

  constructor(private data: DataService) { }

  ngOnInit() {
     this.data.getProject().subscribe((data: ProjectInterface) => this.project$ = data);
  }

}
