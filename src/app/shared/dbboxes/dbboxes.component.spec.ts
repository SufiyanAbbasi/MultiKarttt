import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbboxesComponent } from './dbboxes.component';

describe('DbboxesComponent', () => {
  let component: DbboxesComponent;
  let fixture: ComponentFixture<DbboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbboxesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
