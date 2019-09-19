import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-sub',
  templateUrl: './portfolio-sub.component.html',
  styleUrls: ['./portfolio-sub.component.css']
})
export class PortfolioSubComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
