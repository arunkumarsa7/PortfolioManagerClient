import { DatasourcingDetailsComponent } from './datasourcing-details/datasourcing-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceRecordComponent } from './service-record.component';
import { ServiceDescriptionComponent } from './service-description/service-description.component';
import { KeyContactsComponent } from './key-contacts/key-contacts.component';
import { ServicesSLAComponent } from './services-sla/services-sla.component';

@NgModule({
    declarations: [
        KeyContactsComponent,
        ServiceDescriptionComponent,
        ServiceRecordComponent,
        ServicesSLAComponent,
        DatasourcingDetailsComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [ServiceRecordComponent]

})
export class DatasourcingModule { }