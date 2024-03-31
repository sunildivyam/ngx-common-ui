import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectBoxComponent } from './single-select-box.component';

describe('SingleSelectBoxComponent', () => {
  let component: SingleSelectBoxComponent;
  let fixture: ComponentFixture<SingleSelectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSelectBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
