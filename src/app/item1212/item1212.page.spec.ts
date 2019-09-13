import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item1212Page } from './item1212.page';

describe('Item1212Page', () => {
  let component: Item1212Page;
  let fixture: ComponentFixture<Item1212Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item1212Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1212Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
