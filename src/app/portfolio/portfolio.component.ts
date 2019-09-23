import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
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
    this.updateToolbarAppTitle();
  }

  updateToolbarAppTitle() {
    this.route.paramMap
      .subscribe(params => {
        const id = params.get('id');
        const elem: HTMLElement = document.getElementById('appTitle');
        elem.innerHTML = AppComponent.title + ' | ' + id;
      });
  }

  public showProjects(event: Event) {
    this.router.navigateByUrl('/portfolio/projects', { skipLocationChange: true });
  }

}
