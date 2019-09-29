import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import { ProjectInterface } from '../project-interface';

@Component({
  selector: 'app-datasourcing',
  templateUrl: './datasourcing.component.html',
  styleUrls: ['./datasourcing.component.css']
})
export class DatasourcingComponent implements OnInit {
  project$: ProjectInterface;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getProject().subscribe((data: ProjectInterface) => this.project$ = data);
  }

}
