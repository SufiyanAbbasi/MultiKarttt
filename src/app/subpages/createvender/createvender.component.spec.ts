import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevenderComponent } from './createvender.component';

describe('CreatevenderComponent', () => {
  let component: CreatevenderComponent;
  let fixture: ComponentFixture<CreatevenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatevenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatevenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
