import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutchartComponent } from './doughnutchart.component';

describe('DoughnutchartcomponentComponent', () => {
  let component: DoughnutchartComponent;
  let fixture: ComponentFixture<DoughnutchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughnutchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
