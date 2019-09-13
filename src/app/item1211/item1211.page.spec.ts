import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item1211Page } from './item1211.page';

describe('Item1211Page', () => {
  let component: Item1211Page;
  let fixture: ComponentFixture<Item1211Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item1211Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1211Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
