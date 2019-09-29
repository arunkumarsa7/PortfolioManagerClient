import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { ProjectInterface } from './project-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  project$: ProjectInterface;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getProject().subscribe((data: ProjectInterface) => this.project$ = data);
  }

}
