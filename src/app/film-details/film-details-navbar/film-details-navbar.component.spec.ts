import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsNavbarComponent } from './film-details-navbar.component';

describe('FilmDetailsNavbarComponent', () => {
  let component: FilmDetailsNavbarComponent;
  let fixture: ComponentFixture<FilmDetailsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmDetailsNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
