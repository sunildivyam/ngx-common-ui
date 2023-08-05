import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaShareButtonsComponent } from './social-media-share-buttons.component';

describe('SocialMediaShareButtonsComponent', () => {
  let component: SocialMediaShareButtonsComponent;
  let fixture: ComponentFixture<SocialMediaShareButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaShareButtonsComponent]
    });
    fixture = TestBed.createComponent(SocialMediaShareButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
