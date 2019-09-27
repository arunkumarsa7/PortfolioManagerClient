import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-static-content',
  templateUrl: './dashboard-static-content.component.html',
  styleUrls: ['./dashboard-static-content.component.css']
})
export class DashboardStaticContentComponent implements OnInit {

  project$: object;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getProject().subscribe(data => this.project$ = data);
  }

}
