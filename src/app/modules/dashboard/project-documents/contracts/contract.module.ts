import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractUploadComponent } from './contract-upload/contract-upload.component';
import { ContractTableComponent } from './contract-table/contract-table.component';

@NgModule({
  declarations: [ContractUploadComponent, ContractTableComponent],
  imports: [
    CommonModule
  ]
  , exports: [ContractTableComponent]
})
export class ContractModule { }
