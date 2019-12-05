import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOutComponent } from './timeout.component';

describe('TimeOutComponent', () => {
  let component: TimeOutComponent;
  let fixture: ComponentFixture<TimeOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeOutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
