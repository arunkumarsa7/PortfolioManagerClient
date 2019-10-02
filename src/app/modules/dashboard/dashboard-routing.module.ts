import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { ProjectComponent } from "./projects/project.component";
import { AppConstants } from "src/app/shared/constant/app-constants";
import { ContractTableComponent } from "./project-documents/contracts/contract-table/contract-table.component";
import { ServiceRecordComponent } from "./service-record/service-record.component";

const routes: Routes = [
  {
    path: AppConstants.homePageUrl,
    component: DashboardComponent,
    children: [
      {
        path: "datasourcing",
        component: ServiceRecordComponent,
        data: { animation: AppConstants.datasourcingPageKey }
      },
      {
        path: "contracts",
        component: ContractTableComponent,
        data: { animation: AppConstants.contractsPageKey }
      },
      {
        path: AppConstants.homePageUrl,
        component: ProjectComponent,
        data: { animation: AppConstants.dashboardPageKey }
      }
    ], data: { animation: AppConstants.dashboardPageKey }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
export const DashboardRoutingComponents = [DashboardComponent];
