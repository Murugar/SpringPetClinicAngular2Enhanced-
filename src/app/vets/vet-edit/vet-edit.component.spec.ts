

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {VetEditComponent} from './vet-edit.component';
import {FormsModule} from '@angular/forms';

describe('VetEditComponent', () => {
  let component: VetEditComponent;
  let fixture: ComponentFixture<VetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VetEditComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
