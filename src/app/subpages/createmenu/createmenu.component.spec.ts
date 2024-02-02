import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemenuComponent } from './createmenu.component';

describe('CreatemenuComponent', () => {
  let component: CreatemenuComponent;
  let fixture: ComponentFixture<CreatemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatemenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
