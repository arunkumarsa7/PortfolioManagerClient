import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasourcingComponent} from './datasourcing.component';
import { ServiceDescriptionComponent } from './service-description/service-description.component';
import { KeyContactsComponent } from './key-contacts/key-contacts.component';
import { ServicesSLAComponent } from './services-sla/services-sla.component';

@NgModule({
    declarations: [
      KeyContactsComponent,
        ServiceDescriptionComponent,
        DatasourcingComponent,
        ServicesSLAComponent
    ],
    imports: [
        CommonModule,
        
    ],
    providers: [],
    exports: [DatasourcingComponent]

})
export class DatasourcingModule { }