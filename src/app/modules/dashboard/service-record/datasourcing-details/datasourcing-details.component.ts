import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-datasourcing-details',
   templateUrl: './datasourcing-details.component.html',
   styleUrls: ['./datasourcing-details.component.css']
})
export class DatasourcingDetailsComponent implements OnInit {

   datasourceFilters = [
      {
         name: 'Service Record1',
         value: 'service-record'
      },
      {
         name: 'Owner(IT)',
         value: 'owner-it'
      },
      {
         name: 'Owner(Business)',
         value: 'lowner-business'
      },
      {
         name: 'Service Owner',
         value: 'Service-owner'
      },
      {
         name: 'Document',
         value: 'document'
      }
   ];
   selectedIndex = 5;
   constructor() { }

   ngOnInit() {
   }
   public ChangeDatasourceFilter(index: number, datasource: any) {
      this.selectedIndex = index;
   }

}
