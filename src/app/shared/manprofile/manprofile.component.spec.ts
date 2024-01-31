import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManprofileComponent } from './manprofile.component';

describe('ManprofileComponent', () => {
  let component: ManprofileComponent;
  let fixture: ComponentFixture<ManprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
