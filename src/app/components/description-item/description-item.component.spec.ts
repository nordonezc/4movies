import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionItemComponent } from './description-item.component';

describe('DescriptionItemComponent', () => {
  let component: DescriptionItemComponent;
  let fixture: ComponentFixture<DescriptionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
