import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementStylesComponent } from './element-styles.component';

describe('ElementStylesComponent', () => {
  let component: ElementStylesComponent;
  let fixture: ComponentFixture<ElementStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementStylesComponent],
    });
    fixture = TestBed.createComponent(ElementStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
