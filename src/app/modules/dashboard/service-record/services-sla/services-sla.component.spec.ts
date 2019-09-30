import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSLAComponent } from './services-sla.component';

describe('ServicesSLAComponent', () => {
  let component: ServicesSLAComponent;
  let fixture: ComponentFixture<ServicesSLAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSLAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
