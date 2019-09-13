import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item1122Page } from './item1122.page';

describe('Item1122Page', () => {
  let component: Item1122Page;
  let fixture: ComponentFixture<Item1122Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item1122Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1122Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
