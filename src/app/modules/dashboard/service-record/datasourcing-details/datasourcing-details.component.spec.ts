import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourcingDetailsComponent } from './datasourcing-details.component';

describe('DatasourcingDetailsComponent', () => {
  let component: DatasourcingDetailsComponent;
  let fixture: ComponentFixture<DatasourcingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasourcingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasourcingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
