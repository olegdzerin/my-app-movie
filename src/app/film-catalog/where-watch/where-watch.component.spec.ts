import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereWatchComponent } from './where-watch.component';

describe('WhereWatchComponent', () => {
  let component: WhereWatchComponent;
  let fixture: ComponentFixture<WhereWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
