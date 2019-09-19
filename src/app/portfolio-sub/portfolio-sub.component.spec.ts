import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSubComponent } from './portfolio-sub.component';

describe('PortfolioSubComponent', () => {
  let component: PortfolioSubComponent;
  let fixture: ComponentFixture<PortfolioSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
