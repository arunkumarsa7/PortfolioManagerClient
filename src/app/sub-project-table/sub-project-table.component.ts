import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub-project-table',
  templateUrl: './sub-project-table.component.html',
  styleUrls: ['./sub-project-table.component.css']
})
export class SubProjectTableComponent implements OnInit {
  subProjects$ : object;

  constructor(private data: DataService){}

  ngOnInit() {
    this.data.getSubProjects().subscribe(data => this.subProjects$ = data)
  }

}
