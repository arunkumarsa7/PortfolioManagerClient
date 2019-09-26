import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourcingdetailsComponent } from './datasourcingdetails.component';

describe('DatasourcingdetailsComponent', () => {
  let component: DatasourcingdetailsComponent;
  let fixture: ComponentFixture<DatasourcingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasourcingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasourcingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
