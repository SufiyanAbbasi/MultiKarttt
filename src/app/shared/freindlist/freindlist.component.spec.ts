import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreindlistComponent } from './freindlist.component';

describe('FreindlistComponent', () => {
  let component: FreindlistComponent;
  let fixture: ComponentFixture<FreindlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreindlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreindlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
