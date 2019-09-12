import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProjectTableComponent } from './sub-project-table.component';

describe('SubProjectTableComponent', () => {
  let component: SubProjectTableComponent;
  let fixture: ComponentFixture<SubProjectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProjectTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
