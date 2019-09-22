import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';


@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        document.getElementById("appTitle").innerHTML = AppComponent.title;
    }
    constructor(private router: Router) { }
    public showPortfolio(event: Event) {
        const id = (event.currentTarget as Element).id;
        console.log(id);
        this.router.navigateByUrl('/portfolio/' + id, { skipLocationChange: true });
    }
}
