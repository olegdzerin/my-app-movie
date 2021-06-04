import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNavbarComponent } from './details-navbar.component';

describe('DetailsNavbarComponent', () => {
  let component: DetailsNavbarComponent;
  let fixture: ComponentFixture<DetailsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
