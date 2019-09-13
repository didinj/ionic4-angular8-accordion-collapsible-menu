import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item2121Page } from './item2121.page';

describe('Item2121Page', () => {
  let component: Item2121Page;
  let fixture: ComponentFixture<Item2121Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2121Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2121Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
