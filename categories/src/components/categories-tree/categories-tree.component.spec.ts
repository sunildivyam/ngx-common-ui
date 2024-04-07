import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTreeComponent } from './categories-tree.component';

describe('CategoriesTreeComponent', () => {
  let component: CategoriesTreeComponent;
  let fixture: ComponentFixture<CategoriesTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesTreeComponent]
    });
    fixture = TestBed.createComponent(CategoriesTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
