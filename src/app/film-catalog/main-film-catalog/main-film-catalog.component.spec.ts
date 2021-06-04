import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFilmCatalogComponent } from './main-film-catalog.component';

describe('MainFilmCatalogComponent', () => {
  let component: MainFilmCatalogComponent;
  let fixture: ComponentFixture<MainFilmCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFilmCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFilmCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
