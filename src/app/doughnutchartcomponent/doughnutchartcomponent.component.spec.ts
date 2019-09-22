import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutchartcomponentComponent } from './doughnutchartcomponent.component';

describe('DoughnutchartcomponentComponent', () => {
  let component: DoughnutchartcomponentComponent;
  let fixture: ComponentFixture<DoughnutchartcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughnutchartcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutchartcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
