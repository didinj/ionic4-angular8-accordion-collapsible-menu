import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item2112Page } from './item2112.page';

describe('Item2112Page', () => {
  let component: Item2112Page;
  let fixture: ComponentFixture<Item2112Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2112Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2112Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
