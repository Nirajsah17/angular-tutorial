import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticePipeComponent } from './practice-pipe.component';

describe('PracticePipeComponent', () => {
  let component: PracticePipeComponent;
  let fixture: ComponentFixture<PracticePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticePipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
