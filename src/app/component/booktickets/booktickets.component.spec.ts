import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookticketsComponent } from './booktickets.component';

describe('BookticketsComponent', () => {
  let component: BookticketsComponent;
  let fixture: ComponentFixture<BookticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookticketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
