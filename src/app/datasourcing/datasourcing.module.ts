import { DatasourcingdetailsComponent } from './datasourcingdetails/datasourcingdetails.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasourcingComponent } from './datasourcing.component';
import { ServiceDescriptionComponent } from './service-description/service-description.component';
import { KeyContactsComponent } from './key-contacts/key-contacts.component';
import { ServicesSLAComponent } from './services-sla/services-sla.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
    declarations: [
        KeyContactsComponent,
        ServiceDescriptionComponent,
        DatasourcingComponent,
        ServicesSLAComponent,
        DatasourcingdetailsComponent

    ],
    imports: [
        CommonModule,
        DashboardModule
    ],
    providers: [],
    exports: [DatasourcingComponent]

})
export class DatasourcingModule { }