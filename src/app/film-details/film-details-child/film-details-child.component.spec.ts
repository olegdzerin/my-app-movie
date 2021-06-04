import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsChildComponent } from './film-details-child.component';

describe('FilmDetailsChildComponent', () => {
  let component: FilmDetailsChildComponent;
  let fixture: ComponentFixture<FilmDetailsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmDetailsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
