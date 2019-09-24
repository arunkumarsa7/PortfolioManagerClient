import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasourcingdetails',
  templateUrl: './datasourcingdetails.component.html',
  styleUrls: ['./datasourcingdetails.component.css']
})
export class DatasourcingdetailsComponent implements OnInit {

  datasourceFilters = [
    {
       name: 'Service Record1',
       value: 'service-record'    },
    {
       name: 'Owner(IT)',
       value: 'owner-it'    },
    {
       name: 'Owner(Business)',
       value: 'lowner-business'    },
    {
       name: 'Service Owner',
       value: 'Service-owner'    },
    {
       name: 'Document',
       value: 'document'    }
  ];
  selectedIndex = 5;
  constructor() { }

  ngOnInit() {
  }
  public ChangeDatasourceFilter(index: number, datasource: any) {
    this.selectedIndex = index;
  }

}
