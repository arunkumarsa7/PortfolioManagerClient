import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { DocumentTableComponent } from './document-table/document-table.component';



@NgModule({
  declarations: [DocumentUploadComponent, DocumentTableComponent],
  imports: [
    CommonModule
  ]
  , exports: [DocumentTableComponent]})
export class FileuploadModule { }
