import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAtegoriesComponent } from './categories.component';

describe('CAtegoriesComponent', () => {
  let component: CAtegoriesComponent;
  let fixture: ComponentFixture<CAtegoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CAtegoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CAtegoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
