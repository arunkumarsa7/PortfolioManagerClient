import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent  {
    constructor( private router: Router) { }
    public showPortfolio(event: Event) {
        const id = (event.currentTarget as Element).id;
        console.log(id);
        this.router.navigateByUrl('/portfolio/' + id, { skipLocationChange: true });
    }
}
