import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptableComponent } from './emptable.component';

describe('EmptableComponent', () => {
  let component: EmptableComponent;
  let fixture: ComponentFixture<EmptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
