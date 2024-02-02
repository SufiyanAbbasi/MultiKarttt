import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepageComponent } from './createpage.component';

describe('CreatepageComponent', () => {
  let component: CreatepageComponent;
  let fixture: ComponentFixture<CreatepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
