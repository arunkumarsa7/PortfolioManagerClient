import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { IProjectInfo } from 'src/app/shared/models/iproject-info';

@Component({
  selector: 'app-datasourcing',
  templateUrl: './service-record.component.html',
  styleUrls: ['./service-record.component.css']
})
export class ServiceRecordComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  projects$: IProjectInfo;

  constructor(private facadeService: FacadeService, private router: Router) { }

  ngOnInit() {
    this.subscribeServices();
  }

  ngOnDestroy() {
    this.unsubscribeServices();
  }
  private subscribeServices() {
    this.subscription = this.facadeService.getProjects().subscribe((data: IProjectInfo) => this.projects$ = data);
  }

  private unsubscribeServices() {
    this.subscription.unsubscribe();
  }

}
