import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // hard coded Pillar list
  public pillarArray = [
    {
      id: 1, name: 'Customer Platform'
    },
    {
      id: 2, name: 'Global Platform'
    },
    {
      id: 3, name: 'Cross-Pillar Platform'
    },
  ];
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const id = params.get('id');
        console.log('in Portfolio component id =' + id);
        // Ideally we should write a service to get a response for the given id
      });
  }
  public nextPage() {
    this.router.navigateByUrl('portfolio/dashboard', { skipLocationChange: true });
  }
  public previousPage() {
    this.router.navigateByUrl('', { skipLocationChange: true });
  }
  public showHomePage() {
    this.router.navigateByUrl('', { skipLocationChange: true });
  }
}
