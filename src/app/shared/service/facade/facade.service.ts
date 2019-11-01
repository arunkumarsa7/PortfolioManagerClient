import { Injectable, Injector } from '@angular/core';
import { DashboardService } from 'src/app/shared/service/data/dashboard/dashboard.service';
import { ServiceOfferingService } from 'src/app/shared/service/data/service-offering/service-offering.service';
import { PortfolioService } from 'src/app/shared/service/data/portfolio/portfolio.service';
import { OEDataService, OEList } from 'src/app/shared/service/data/oe/oe-data.service';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/shared/service/notification/notification.service';
import { LoggingService } from 'src/app/shared/service/logging/logging.service';
import { ErrorService } from 'src/app/shared/service/error/error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class FacadeService {
  private dashboardService: DashboardService;
  private serviceOfferingService: ServiceOfferingService;
  private portfolioService: PortfolioService;
  private oeDataService: OEDataService;
  private notificationService: NotificationService;
  private loggingService: LoggingService;
  private errorService: ErrorService;

  constructor(private injector: Injector) { }

  public get getDashboardService(): DashboardService {
    if (!this.dashboardService) {
      this.dashboardService = this.injector.get(DashboardService);
    }
    return this.dashboardService;
  }

  public get getServiceOfferingService(): ServiceOfferingService {
    if (!this.serviceOfferingService) {
      this.serviceOfferingService = this.injector.get(ServiceOfferingService);
    }
    return this.serviceOfferingService;
  }

  public get getPortfolioService(): PortfolioService {
    if (!this.portfolioService) {
      this.portfolioService = this.injector.get(PortfolioService);
    }
    return this.portfolioService;
  }

  public get getOEDataService(): OEDataService {
    if (!this.oeDataService) {
      this.oeDataService = this.injector.get(OEDataService);
    }
    return this.oeDataService;
  }

  public get LoggingService(): LoggingService {
    if (!this.loggingService) {
      this.loggingService = this.injector.get(LoggingService);
    }
    return this.loggingService;
  }

  public get NotificationService(): NotificationService {
    if (!this.notificationService) {
      this.notificationService = this.injector.get(NotificationService);
    }
    return this.notificationService;
  }

  public get ErrorService(): ErrorService {
    if (!this.errorService) {
      this.errorService = this.injector.get(ErrorService);
    }
    return this.errorService;
  }

  getProjects() {
    return this.getDashboardService.getProjects();
  }

  getSubProjects() {
    return this.getDashboardService.getSubProjects();
  }

  getProjectKPISummary(portfolioId: number) {
    return this.getDashboardService.getProjectKPISummary(portfolioId);
  }

  getProjectsByPortfolio(portfolioId: number) {
    return this.getDashboardService.getProjectsByPortfolio(portfolioId);
  }

  getServiceOfferings(oeId: number) {
    return this.getServiceOfferingService.getServiceOfferings(oeId);
  }

  getPortfolios(serviceOfferingId: number) {
    return this.getPortfolioService.getPortfolios(serviceOfferingId);
  }

  public notifyError(message: string): void {
    return this.NotificationService.showError(message);
  }

  public notifySuccess(message: string): void {
    return this.NotificationService.showSuccess(message);
  }

  public notifyInfo(message: string): void {
    return this.NotificationService.showInfo(message);
  }
  public notifyWarning(message: string): void {
    return this.NotificationService.showWarning(message);
  }

  public logError(message: string, stack: string): void {
    return this.LoggingService.logError(message, stack);
  }

  public getClientMessage(error: Error): string {
    return this.ErrorService.getClientMessage(error);
  }

  public getClientStack(error: Error): string {
    return this.ErrorService.getClientStack(error);
  }

  public getServerMessage(error: HttpErrorResponse): string {
    return this.ErrorService.getServerMessage(error);
  }

  public getServerStack(error: HttpErrorResponse): string {
    return this.ErrorService.getServerStack(error);
  }

  public getOperatingEntities() {
    return this.getOEDataService.getOperatingEntities();
  }

}
