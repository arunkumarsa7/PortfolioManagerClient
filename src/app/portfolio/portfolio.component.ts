import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

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
  constructor(private route: ActivatedRoute, private myElement: ElementRef) { }
  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get('id');
        console.log(id);

        var hElement: HTMLElement = this.myElement.nativeElement;
        var parentDiv = hElement.getElementsByClassName('.toolbar');
        console.log(parentDiv);

        //Ideally we should write a service to get a response for the given id
      });
  }
}
