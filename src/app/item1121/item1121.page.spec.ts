import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item1121Page } from './item1121.page';

describe('Item1121Page', () => {
  let component: Item1121Page;
  let fixture: ComponentFixture<Item1121Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item1121Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1121Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
