import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoThimbnailComponent } from './video-thimbnail.component';

describe('VideoThimbnailComponent', () => {
  let component: VideoThimbnailComponent;
  let fixture: ComponentFixture<VideoThimbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoThimbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoThimbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
