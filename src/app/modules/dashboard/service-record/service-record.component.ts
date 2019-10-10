import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FacadeService } from '../../../shared/service/facade/facade.service';
import { ProjectInfo } from '../../../shared/models/project-info';

@Component({
  selector: 'app-datasourcing',
  templateUrl: './service-record.component.html',
  styleUrls: ['./service-record.component.css']
})
export class ServiceRecordComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  project$: ProjectInfo;

  constructor(private facadeService: FacadeService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.facadeService.getProject().subscribe((data: ProjectInfo) => this.project$ = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
