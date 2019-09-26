import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDescriptionComponent } from './service-description.component';

describe('ServiceDescriptionComponent', () => {
  let component: ServiceDescriptionComponent;
  let fixture: ComponentFixture<ServiceDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
