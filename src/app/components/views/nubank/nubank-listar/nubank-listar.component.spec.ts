/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NubankListarComponent } from './nubank-listar.component';

describe('NubankListarComponent', () => {
  let component: NubankListarComponent;
  let fixture: ComponentFixture<NubankListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NubankListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NubankListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
