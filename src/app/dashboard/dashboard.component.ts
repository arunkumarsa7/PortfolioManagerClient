import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  project$ : object;
  constructor(private data: DataService){}
  ngOnInit(): void {
    this.data.getProject().subscribe(data => this.project$ = data)
  }

}
