import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEmbedComponent } from './image-embed.component';

describe('ImageEmbedComponent', () => {
  let component: ImageEmbedComponent;
  let fixture: ComponentFixture<ImageEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageEmbedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
