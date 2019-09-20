import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartcomponentComponent } from './linechartcomponent.component';

describe('LinechartcomponentComponent', () => {
  let component: LinechartcomponentComponent;
  let fixture: ComponentFixture<LinechartcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinechartcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechartcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
