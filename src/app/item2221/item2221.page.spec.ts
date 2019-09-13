import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item2221Page } from './item2221.page';

describe('Item2221Page', () => {
  let component: Item2221Page;
  let fixture: ComponentFixture<Item2221Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2221Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2221Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
