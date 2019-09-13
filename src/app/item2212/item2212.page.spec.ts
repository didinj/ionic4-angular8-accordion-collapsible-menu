import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item2212Page } from './item2212.page';

describe('Item2212Page', () => {
  let component: Item2212Page;
  let fixture: ComponentFixture<Item2212Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2212Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2212Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
