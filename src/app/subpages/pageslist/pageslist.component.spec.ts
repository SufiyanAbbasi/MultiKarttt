import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageslistComponent } from './pageslist.component';

describe('PageslistComponent', () => {
  let component: PageslistComponent;
  let fixture: ComponentFixture<PageslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
