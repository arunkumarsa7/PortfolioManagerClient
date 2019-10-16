import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyContactsComponent } from './key-contacts.component';

describe('KeyContactsComponent', () => {
  let component: KeyContactsComponent;
  let fixture: ComponentFixture<KeyContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KeyContactsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
