import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasourcingComponent} from './datasourcing.component';
import { ServiceDescriptionComponent } from './service-description/service-description.component';
import { KeyContactsComponent } from './key-contacts/key-contacts.component';

@NgModule({
    declarations: [
      KeyContactsComponent,
        ServiceDescriptionComponent,
        DatasourcingComponent
    ],
    imports: [
        CommonModule,
        
    ],
    providers: [],
    exports: [DatasourcingComponent]

})
export class DatasourcingModule { }