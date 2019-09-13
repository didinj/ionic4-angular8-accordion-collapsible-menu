import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item1111Page } from './item1111.page';

describe('Item1111Page', () => {
  let component: Item1111Page;
  let fixture: ComponentFixture<Item1111Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item1111Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
