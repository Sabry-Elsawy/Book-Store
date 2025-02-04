import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavpComponent } from './main-navp.component';

describe('MainNavpComponent', () => {
  let component: MainNavpComponent;
  let fixture: ComponentFixture<MainNavpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavpComponent]
    });
    fixture = TestBed.createComponent(MainNavpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
