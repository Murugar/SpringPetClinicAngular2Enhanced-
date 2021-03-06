

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {VetAddComponent} from './vet-add.component';
import {FormsModule} from '@angular/forms';

describe('VetAddComponent', () => {
  let component: VetAddComponent;
  let fixture: ComponentFixture<VetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VetAddComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
