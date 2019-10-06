import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/service/data/data.service';
import { Router } from '@angular/router';
import { ProjectInfo } from '../../../shared/models/project-info';

@Component({
  selector: 'app-datasourcing',
  templateUrl: './service-record.component.html',
  styleUrls: ['./service-record.component.css']
})
export class ServiceRecordComponent implements OnInit {
  project$: ProjectInfo;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getProject().subscribe((data: ProjectInfo) => this.project$ = data);
  }

}
