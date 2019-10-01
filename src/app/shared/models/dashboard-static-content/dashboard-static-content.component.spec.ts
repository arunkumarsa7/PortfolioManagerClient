import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStaticContentComponent } from './dashboard-static-content.component';

describe('DashboardStaticContentComponent', () => {
  let component: DashboardStaticContentComponent;
  let fixture: ComponentFixture<DashboardStaticContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStaticContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStaticContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
