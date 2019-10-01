import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/service/data/data.service';
import { Globals } from '../../../../shared/constant/globals';
import { RouterUtil } from '../../../../shared/service/routing/router-util';

@Component({
  selector: 'app-sub-project-table',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  subProjects$: object;
  globals: Globals;

  constructor(private data: DataService, private routerUtil: RouterUtil, globals: Globals) { this.globals = globals; }

  ngOnInit() {
    this.data.getSubProjects().subscribe(data => this.subProjects$ = data)
  }

  public showDatasourcing(event: Event) {
    this.routerUtil.navigateToNextPage();
  }

}
