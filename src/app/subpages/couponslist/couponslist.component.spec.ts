import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponslistComponent } from './couponslist.component';

describe('CouponslistComponent', () => {
  let component: CouponslistComponent;
  let fixture: ComponentFixture<CouponslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouponslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
