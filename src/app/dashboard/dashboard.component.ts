import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router) { }
  public nextPage() {
    this.router.navigateByUrl('portfolio/dashboard/datasourcing', { skipLocationChange: true });
  }
  public previousPage() {
   this.router.navigateByUrl('portfolio/id', { skipLocationChange: true });
  }
  public showHomePage() {
    this.router.navigateByUrl('', { skipLocationChange: true });
   }
  ngOnInit() {
  }

}
