import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AppConstants } from '../../shared/constant/app-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.title = AppComponent.title;
  }

  public showHomePage() {
    this.router.navigateByUrl(AppConstants.homePageUrl, { skipLocationChange: true });
  }

}
