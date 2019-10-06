import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRecordComponent } from './service-record.component';

describe('DatasourcingComponent', () => {
  let component: ServiceRecordComponent;
  let fixture: ComponentFixture<ServiceRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
