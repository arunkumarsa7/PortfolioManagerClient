import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ProjectInterface } from '../dashboard/project-interface';

@Component({
  selector: 'app-datasourcing',
  templateUrl: './datasourcing.component.html',
  styleUrls: ['./datasourcing.component.css']
})
export class DatasourcingComponent implements OnInit {
  project$: ProjectInterface;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    this.data.getProject().subscribe((data: ProjectInterface) => this.project$ = data);
  }
}
