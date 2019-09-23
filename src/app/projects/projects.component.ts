import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: '../portfolio/portfolio.component.html',
  styleUrls: ['../portfolio/portfolio.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public showDashboard(event: Event) {
    this.router.navigateByUrl('/portfolio/projects/dashboard', { skipLocationChange: true });
  }

}
