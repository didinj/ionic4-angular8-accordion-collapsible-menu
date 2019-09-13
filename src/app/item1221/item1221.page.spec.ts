import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item1221Page } from './item1221.page';

describe('Item1221Page', () => {
  let component: Item1221Page;
  let fixture: ComponentFixture<Item1221Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item1221Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1221Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
