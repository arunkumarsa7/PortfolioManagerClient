import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/shared/constant/app-constants';
import { Globals } from 'src/app/shared/constant/globals';

@Component({
  selector: 'app-document-buttons',
  templateUrl: './document-buttons.component.html',
  styleUrls: ['./document-buttons.component.css']
})
export class DocumentButtonsComponent implements OnInit {
  globals: Globals;

  constructor(private router: Router, globals: Globals) {
    this.globals = globals;
  }

  ngOnInit() { }

  showContractsPage() {
    this.globals.appPage = AppConstants.contractsPageKey;
    this.router.navigateByUrl(AppConstants.contractsPageUrl, {
      skipLocationChange: true
    });
  }

}
