import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourcingComponent } from './datasourcing.component';

describe('DatasourcingComponent', () => {
  let component: DatasourcingComponent;
  let fixture: ComponentFixture<DatasourcingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasourcingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
