import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item2122Page } from './item2122.page';

describe('Item2122Page', () => {
  let component: Item2122Page;
  let fixture: ComponentFixture<Item2122Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2122Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2122Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
