import { Component, AfterViewInit } from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

    ngAfterViewInit() {
        this.updateToolbarAppTitle();
    }

    updateToolbarAppTitle() {
        document.getElementById('appTitle').innerHTML=AppComponent.title;
    }

}