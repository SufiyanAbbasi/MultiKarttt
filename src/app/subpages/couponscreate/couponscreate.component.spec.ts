import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponscreateComponent } from './couponscreate.component';

describe('CouponscreateComponent', () => {
  let component: CouponscreateComponent;
  let fixture: ComponentFixture<CouponscreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponscreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouponscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
