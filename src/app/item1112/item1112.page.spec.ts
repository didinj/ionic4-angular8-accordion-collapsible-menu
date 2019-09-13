import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item1112Page } from './item1112.page';

describe('Item1112Page', () => {
  let component: Item1112Page;
  let fixture: ComponentFixture<Item1112Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item1112Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1112Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
