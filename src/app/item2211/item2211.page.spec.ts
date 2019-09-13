import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item2211Page } from './item2211.page';

describe('Item2211Page', () => {
  let component: Item2211Page;
  let fixture: ComponentFixture<Item2211Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2211Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2211Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
