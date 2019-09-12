import { AfterViewInit, Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit, AfterViewInit {

  //hard coded Pillar list
  public pillarArray = [
    {
      "id": 1, "name": "Customer Platform"
    },
    {
      "id": 2, "name": "Global Platform"
    },
    {
      "id": 3, "name": "Cross-Pillar Platform"
    },
  ];

  constructor(private route: ActivatedRoute, private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //Ideally we should write a service to get a response for the given id
    this.updateToolbarAppTitle();
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
