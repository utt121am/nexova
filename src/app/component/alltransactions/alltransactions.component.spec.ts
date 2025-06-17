import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltransactionsComponent } from './alltransactions.component';

describe('AlltransactionsComponent', () => {
  let component: AlltransactionsComponent;
  let fixture: ComponentFixture<AlltransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlltransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
