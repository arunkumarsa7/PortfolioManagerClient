import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // hard coded Pillar list
   pillarArray: Object;
  constructor(private data: DataService,private route: ActivatedRoute, private router: Router
    ) { }
  ngOnInit() {
    this.updateToolbarAppTitle();
    this.data.getProtfolioServices().subscribe(data => this.pillarArray = data)
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
  public protfolioSubPage() {

    this.router.navigateByUrl('portfolio/portfolio-sub', 
    { skipLocationChange: true });
   
  }

  updateToolbarAppTitle() {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get('id');
        let elem: HTMLElement = document.getElementById('appTitle');
        elem.innerHTML = AppComponent.title + ' | ' + id;
      });
  }

}
