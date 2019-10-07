import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentButtonsComponent } from './document-buttons.component';

describe('DocumentButtonsComponent', () => {
  let component: DocumentButtonsComponent;
  let fixture: ComponentFixture<DocumentButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentButtonsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
