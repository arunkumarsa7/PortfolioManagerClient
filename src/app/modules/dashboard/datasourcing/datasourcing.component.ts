import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/service/data/data.service';
import { Router } from '@angular/router';
import { ProjectInfo } from '../../../models/project-info';

@Component({
  selector: 'app-datasourcing',
  templateUrl: './datasourcing.component.html',
  styleUrls: ['./datasourcing.component.css']
})
export class DatasourcingComponent implements OnInit {
  project$: ProjectInfo;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getProject().subscribe((data: ProjectInfo) => this.project$ = data);
  }

}
