import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item2111Page } from './item2111.page';

describe('Item2111Page', () => {
  let component: Item2111Page;
  let fixture: ComponentFixture<Item2111Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2111Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
