import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datasourcing',
  templateUrl: './datasourcing.component.html',
  styleUrls: ['./datasourcing.component.css']
})
export class DatasourcingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public previousPage() {
    this.router.navigateByUrl('portfolio/dashboard', { skipLocationChange: true });
   }
   public showHomePage() {
    this.router.navigateByUrl('', { skipLocationChange: true });
   }
}
