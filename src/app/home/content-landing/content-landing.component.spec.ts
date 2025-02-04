import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLandingComponent } from './content-landing.component';

describe('ContentLandingComponent', () => {
  let component: ContentLandingComponent;
  let fixture: ComponentFixture<ContentLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentLandingComponent]
    });
    fixture = TestBed.createComponent(ContentLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
