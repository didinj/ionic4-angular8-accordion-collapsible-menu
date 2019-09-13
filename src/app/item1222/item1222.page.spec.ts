import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item1222Page } from './item1222.page';

describe('Item1222Page', () => {
  let component: Item1222Page;
  let fixture: ComponentFixture<Item1222Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item1222Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1222Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
