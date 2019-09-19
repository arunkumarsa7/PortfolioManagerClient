import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  project$: object;

  constructor(private data: DataService, private router: Router) { }

  public showHomePage() {
    this.router.navigateByUrl('', { skipLocationChange: true });
  }

  ngOnInit() {
    this.data.getProject().subscribe(data => this.project$ = data)
  }

}