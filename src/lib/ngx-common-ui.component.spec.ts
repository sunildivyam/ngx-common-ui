import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCommonUiComponent } from './ngx-common-ui.component';

describe('NgxCommonUiComponent', () => {
  let component: NgxCommonUiComponent;
  let fixture: ComponentFixture<NgxCommonUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxCommonUiComponent]
    });
    fixture = TestBed.createComponent(NgxCommonUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
