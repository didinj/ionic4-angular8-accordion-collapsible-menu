import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item2222Page } from './item2222.page';

describe('Item2222Page', () => {
  let component: Item2222Page;
  let fixture: ComponentFixture<Item2222Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2222Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2222Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
